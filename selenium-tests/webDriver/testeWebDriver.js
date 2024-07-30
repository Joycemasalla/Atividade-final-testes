const { Builder, By, until } = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navega para a página de cadastro de carros
        console.log('Navegando para a página de cadastro de carros');
        await driver.get('https://cadastrocars.vercel.app/car');

        // Preenche o formulário de cadastro
        console.log('Preenchendo o formulário');
        await driver.findElement(By.css('select.brandField')).sendKeys('Honda');
        await driver.findElement(By.css('input.modelField')).sendKeys('Civic');
        await driver.findElement(By.css('input.yearField')).sendKeys('2023');
        await driver.findElement(By.css('input.kmField')).sendKeys('25000');
        await driver.findElement(By.css('input.priceField')).sendKeys('70000');

        // Clica no botão de cadastro
        console.log('Tentando clicar no botão de cadastro');
        let button = await driver.findElement(By.css('button.button.full'));
        if (await button.isEnabled()) {
            await button.click();
            console.log('Formulário enviado');
        } else {
            console.log('Botão de cadastro está desabilitado');
            return; // Sai da função se o botão estiver desabilitado
        }

        // Verifica a mensagem de sucesso
        console.log('Aguardando mensagem de sucesso');
        let successMessageElement;
        try {
            successMessageElement = await driver.wait(until.elementLocated(By.css('.mensagem-sucesso')), 20000);
            console.log('Mensagem de sucesso localizada');
            let successMessage = await successMessageElement.getText();
            console.log(successMessage.includes('Carro cadastrado com sucesso') ? 'Cadastro bem-sucedido' : 'Cadastro falhou');
        } catch (error) {
            console.error('Não foi possível encontrar a mensagem de sucesso:', error);
        }

    } catch (err) {
        console.error('Erro:', err);
    } finally {
        // Fecha o navegador
        await driver.quit();
    }
}

example();
