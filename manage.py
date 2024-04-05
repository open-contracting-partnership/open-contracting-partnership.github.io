#!/usr/bin/env python
import difflib
import filecmp
import os
import re
import shutil
from pathlib import Path

import click
import pypdf
from pypdf.errors import PdfReadError

REMOVE = re.compile(r"""
    \?\w{6}\b                # cache-busting query string
    |\?v=\d\.\d\.\d+\b       # cache-busting query string
    |\d\.\d{2}\b(?=\ MB)     # file size
    |js-view-dom-id-\w{64}\b # class name
    |\b\w{7,22}-\d{8,10}\b   # anchor
    |<script\ type="application/json"[^<]+</script>
""", re.VERBOSE)


def readlines(file):
    return REMOVE.sub("", file.read_text()).splitlines(keepends=True)


@click.command()
@click.argument("indir", type=click.Path(exists=True, file_okay=False))
@click.argument("outdir", type=click.Path(exists=False, file_okay=False))
def merge(indir, outdir):
    outdir = Path(outdir)
    if outdir.exists():
        raise click.UsageError(f"The {outdir}/ directory exists")

    for root, dirs, files in os.walk(indir):
        dirs.sort(reverse=True)
        for file in files:
            if file == ".DS_Store":
                continue

            infile = Path(root) / file
            # Drop, for example, "websites/example.com".
            relpath = infile.relative_to(indir)
            # Drop, for example, "20161013173053".
            outfile = outdir / relpath.relative_to(relpath.parts[0])

            if "?" in outfile.name:
                name, qs = outfile.name.split("?", 1)
                outfile = outfile.parent / name

            outfile.parent.mkdir(parents=True, exist_ok=True)
            exists = outfile.exists()
            overwrite = False

            if exists:
                if not filecmp.cmp(infile, outfile):
                    pass
                    if outfile.suffix == ".pdf":
                        try:
                            pypdf.PdfReader(outfile)
                        except PdfReadError:
                            overwrite = True
                    # click.secho(infile, fg="red")
                    # # Assume the latest CSS, JS and robots.txt files are correct.
                    # if outfile.name != "robots.txt" and not outfile.suffix in (".css", ".js"):
                    #     a = readlines(infile)
                    #     b = readlines(outfile)

                    #     for tag, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b).get_opcodes():
                    #         c = "".join(a[i1:i2]).strip()
                    #         d = "".join(b[j1:j2]).strip()
                    #         if c or d:
                    #             if tag == "delete":
                    #                 click.echo(f"-- {c!r}")
                    #             elif tag == "insert":
                    #                 click.echo(f"++ {d!r}")
                    #             elif tag == "replace":
                    #                 click.echo(f"-  {c!r}\n+  {d!r}")
            if not exists or overwrite:
                if exists:
                    click.secho(f"Re-copy {infile}", fg="blue")
                shutil.copy2(infile, outfile)


if __name__ == "__main__":
    merge()
