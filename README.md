# e-Procurement Toolkit

```shell
bundle exec wayback_machine_downloader --all-timestamps https://www.eprocurementtoolkit.org
rm -rf docs/; ./manage.py websites/www.eprocurementtoolkit.org/ docs
```

To do:

- [ ] Manually download files with "File name too long @ dir_s_mkdir" in `debug.log`
- [ ] Rework `requirements/index.html` to open the correct `requirements-results-view/` file (or use JS to load the correct section via query string)
- [ ] Remove French from dropdown (only home page is available)
- [ ] Uncomment code, to review if any relevant differences across file versions
