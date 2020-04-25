##  Let's start!

### Directory Architecture
First thing first, here's the directory architecture that I've used until now, and it still works flawlessly.

    .
    ├── api            
    │   ├── data
    │   ├── page
    │   └── test 
    ├── reports
    └── package.json

| Directory  | Description                                                       |
| ---------  | ----------------------------------------------------------------- |
| data       | Contains JSONSchema to assert data set of the response            |
| page       | Contains your script for hitting the API Endpoint                 |
| test       | Contains your script to define your test cases                    |

---
### Basic Coding Workflow

1. Create a new file `{featureName}.js` in `./page/`
2. Start [Writing Your Page File](#writing-page-file).
3. Create a new json file containing schema from the response in `./data/`
4. Start [Writing Your JSONSchema Script](#writing-jsonschema-script).
5. Create a new test file `{featureName}.js` in `./test/`
6. Start [Writing Your Test File Script](#writing-test-file).

---

### Writing Page File


---

### Writing JSONSchema Script

---

### Writing Test File Script


---

### Running the Test & Generating Test Report
Before running the test, you may want to check your configuration in `serenity.properties`. In this project case, I attached the website url inside `serenity.properties` and choosing Incognito Chrome as my runner web-browser. Here's the example config:

```sh
webdriver.driver=chrome
webdriver.base.url=http://webdriveruniversity.com/
chrome.switches=--incognito
serenity.browser.width=1366
serenity.browser.height=768
```

To run the test and generate the Test Report, use this command in terminal:
```sh
$ mvn clean verify                                          | Run all test & generate Test Report
$ mvn clean verify -Dcucumber.options="--tags @login"       | Run only @login tag & generate Test Report
```

After it successfully run, it will generate your test reports in `target/site/serenity`. I usually directly search for `index.html` file inside of that directory, and when you open it in your web browser, it will look like this:

![Serenity Report](img/report-serenity.png)

Serenity reports provide detailed Test Result with detailed summary, and you can also see the pie chart and percentage of fail and success rate of your test automation.

![Serenity Report Details](img/report-serenity-details.png)

The Test Report can also provide you automatically with screenshots for each of your test steps. This is configured in the `serenity.properties` file using this scripts: `serenity.take.screenshots=AFTER_EACH_STEP`. You can checkout other option for `serenity.properties` [here](https://github.com/serenity-bdd/serenity-documentation/blob/master/src/asciidoc/system-props.adoc) !
