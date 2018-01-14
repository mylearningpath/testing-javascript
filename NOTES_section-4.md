## Seção 4 - Teoria de Testes

#### Qualidade de Código

**Operação**

- Corretitude - Ele faz o que foi pedido?
- Confiabilidade - Ele é preciso?
- Eficiência - Ele tem boa performance?
- Integridade - Oferece segurança?
- Usabilidade - Fácil de usar?
- Adaptabilidade - Ele se adapta as necessidades do usuário?

**Transição**

- Portabilidade - Consigo movê-lo facilmente?
- Reusabilidade - Posso utilizar parte dele?
- Interoperabilidade - Ele trabalha com outros sofwares em conjunto?

**Revisão**

- Manutenibilidade - Fácil de corrigir?
- Flexibilidade - Fácil de mudar?
- Testabilidade - Posso testar seu funcionamento?

---

#### Perfil de um código bem escrito

**Variáveis**

- Nomes semânticos - Y: userName | N: foo
- Nomes fáceis de ler e escrever - Y: userName | N: us3rn4m3
- Substantivo para `classes` e `objetos` - User, Product
- Verbos para `methods` - getUser, deleteProducts

**Métodos**

- Deve ser pequenos
- Possuir responsabilidade única
- Permitir reuso
- Fácilmente testáveis

**Comentários**

- Não comente código ruim

**Testes**

- Faça testes!

### TDD (Test Driven Development)

**Por que testar?**

> "Code starts simple but it doesn't stay simple for ever"

**Fluxo de Testes**

` ... red > green > refactor ... `

**Pensando em testes**

- O que o código precisa fazer?
- Que dados ele recebe?
- Que dados ele precisa receber?
- Que ações precisam acontecer para o código rodar?

**Tipos de testes**

*Unit*

- Isolamento do ambiente (evitar ruído entre testes)
- Escolher os *asserts* ideais para cada validação
- Utilização de *mocks* para chamadas externas
- Utilize test unitário para *design do código*

*Service / Integration*

- Isolamento do ambiente
- Cuidado para não criar teste inútil (não repetir test unitário)
- Implementar teste de integração da interface com a lógica (UI / Regression)

*Aceitação / Functional (e2e)*

- Validar *apenas* o fluxo de funcionamento do projeto
- Implementar testes de inteface

---

## Ferramentas de Testes

**Runner**

**Assertion Libraries**

**Mocking Libraries**

**Code Coverage**

---

## Técnicas de Testes

***Spies**

São utilizados para vigiar informações sobre chamadas de funções (métodos). Um spy vai nos dizer se o método foi chamado, quantas vezes, quais argumentos foram passados, etc.

São úteis para testar callbacks e como métodos são usados dentro do sistema. Os spies te permitem verificar se um outro método foi chamado dentro do método que você está testando.

```javascript
it("should inspect jQuery.getJSON's usage of jQuery.ajax", function () {
    sinon.spy(jQuery, "ajax");
    
    jQuery.getJSON("/some/resource");
    assert(jQuery.ajax.calledOnce);
});
```

**Stubs**

Stubs são como os spies, exceto por eles substituirem a função alvo. Podendo inclusive mudar o comportamento, assim como os valores e exceções levantadas.

São úteis para controlar comportamento de um teste (Ex.: forçar uma exceção); "Pular" uma parte não necessária do código. (Ex.: execução de db) e simplificar o teste de código assíncrono.

**Mocks**

Mocks são métodos falsos (similares aos spies) com comportamento pré-programado (similar ao stub) e respostas/expectations pré-programados.
 
Mocks devem ser primariamente utilizados quando você precisa de um stub, mas precisa verificar múltiplos comportamentos num específico ponto.

```javascript
it('should pass object with correct values to save only once', function() {
  var info = { name: 'test' };
  var expectedUser = { nameLowercase: info.name.toLowerCase() };
  
  var database = sinon.mock(Database);
  database.expects('save').once().withArgs(expectedUser);

  setupNewUser(info, function() { });
  database.verify();
  database.restore();
});
```





