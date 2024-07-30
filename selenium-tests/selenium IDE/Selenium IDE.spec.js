// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CT_CadastrarCars', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CT_CadastrarCars', async function() {
    // Test name: CT_CadastrarCars
    // Step # | name | target | value
    // 1 | open | https://cadastrocars.vercel.app/ | 
    await driver.get("https://cadastrocars.vercel.app/")
    // 2 | setWindowSize | 1552x832 | 
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    // 3 | click | linkText=Cadastrar | 
    await driver.findElement(By.linkText("Cadastrar")).click()
    // 4 | click | css=.brandField | 
    await driver.findElement(By.css(".brandField")).click()
    // 5 | select | css=.brandField | label=Honda
    {
      const dropdown = await driver.findElement(By.css(".brandField"))
      await dropdown.findElement(By.xpath("//option[. = 'Honda']")).click()
    }
    // 6 | click | css=.modelField | 
    await driver.findElement(By.css(".modelField")).click()
    // 7 | type | css=.modelField | Civic
    await driver.findElement(By.css(".modelField")).sendKeys("Civic")
    // 8 | click | css=.yearField | 
    await driver.findElement(By.css(".yearField")).click()
    // 9 | type | css=.yearField | 2021
    await driver.findElement(By.css(".yearField")).sendKeys("2021")
    // 10 | click | css=.kmField | 
    await driver.findElement(By.css(".kmField")).click()
    // 11 | type | css=.kmField | 14200
    await driver.findElement(By.css(".kmField")).sendKeys("14200")
    // 12 | click | css=.priceField | 
    await driver.findElement(By.css(".priceField")).click()
    // 13 | type | css=.priceField | 10001
    await driver.findElement(By.css(".priceField")).sendKeys("10001")
    // 14 | click | css=.priceField | 
    await driver.findElement(By.css(".priceField")).click()
    // 15 | type | css=.priceField | 10000
    await driver.findElement(By.css(".priceField")).sendKeys("10000")
    // 16 | click | css=.priceField | 
    await driver.findElement(By.css(".priceField")).click()
    // 17 | click | css=.full | 
    await driver.findElement(By.css(".full")).click()
    // 18 | mouseOver | css=.full | 
    {
      const element = await driver.findElement(By.css(".full"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 19 | click | css=.carItem:nth-child(6) > .column div:nth-child(2) | 
    await driver.findElement(By.css(".carItem:nth-child(6) > .column div:nth-child(2)")).click()
    // 20 | click | css=.carItem:nth-child(6) .pointButton | 
    await driver.findElement(By.css(".carItem:nth-child(6) .pointButton")).click()
    // 21 | click | css=.pointWindowBtn:nth-child(1) | 
    await driver.findElement(By.css(".pointWindowBtn:nth-child(1)")).click()
    // 22 | click | css=.priceField | 
    await driver.findElement(By.css(".priceField")).click()
    // 23 | click | css=.priceField | 
    await driver.findElement(By.css(".priceField")).click()
    // 24 | type | css=.priceField | 20000
    await driver.findElement(By.css(".priceField")).sendKeys("20000")
    // 25 | click | css=.full | 
    await driver.findElement(By.css(".full")).click()
    // 26 | click | css=.carItem:nth-child(6) .pointButton | 
    await driver.findElement(By.css(".carItem:nth-child(6) .pointButton")).click()
    // 28 | click | css=.pointWindowBtn:nth-child(2) | 
    await driver.findElement(By.css(".pointWindowBtn:nth-child(2)")).click()
    // 29 | assertConfirmation | Tem certeza que deseja excluir? | 
    assert(await driver.switchTo().alert().getText() == "Tem certeza que deseja excluir?")
    // 30 | webdriverChooseOkOnVisibleConfirmation |  | 
    await driver.switchTo().alert().accept()
    // 31 | click | linkText=Cadastrar | 
    await driver.findElement(By.linkText("Cadastrar")).click()
    // 32 | click | css=span | 
    await driver.findElement(By.css("span")).click()
  })
})
