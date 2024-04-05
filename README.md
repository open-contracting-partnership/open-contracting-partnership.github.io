# e-Procurement Toolkit

```shell
bundle exec wayback_machine_downloader --all-timestamps https://www.eprocurementtoolkit.org
rm -rf docs/; ./manage.py websites/www.eprocurementtoolkit.org/ docs
```

To do:

- [ ] Edit `wayback_machine_downloader` to handle "File name too long @ dir_s_mkdir"
- [ ] Rework `requirements/index.html` to open the correct `requirements-results-view/` file
- [ ] Remove unnecessary pages (login, password, etc.)
- [ ] Uncomment code, to review if any relevant differences across file versions
