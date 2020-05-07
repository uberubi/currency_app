import React, { useState } from "react";
import { toConvert } from "../../utils/convertion";
import { Jumbotron, Form, Container, Row, Col } from "react-bootstrap";

const Convertor = ({currencies}) => {
  
  let [inputCurrency, setInputCurrency] = useState(0);
  let [outputCurrency, setOutputCurrency] = useState(0);
  let [currencyFrom, setCurrencyFrom] = useState('');
  let [currencyTo, setCurrencyTo] = useState('');
  let [isCurrencyFromSelected, setIsCurrencyFromSelected] = useState(false);
  let [isCurrencyToSelected, setIsCurrencyToSelected] = useState(false);

  const onInputChange = (e) => {
    setInputCurrency(e.currentTarget.value);
    setOutputCurrency(toConvert(currencyFrom, currencyTo, e.currentTarget.value, currencies));
  };

  const onOptionChangeFrom = (e) => {
    setIsCurrencyFromSelected(true);
    setInputCurrency(0);
    setOutputCurrency(0);
    setCurrencyFrom(e.currentTarget.value);
  };

  const onOptionChangeTo = (e) => {
    setIsCurrencyToSelected(true);
    setInputCurrency(0);
    setOutputCurrency(0);
    setCurrencyTo(e.currentTarget.value);
  };

  let currenciesElement = currencies.map((currency) => (
    <option key={currency.CharCode}>{currency.Name}</option>
  ));
 
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>
                  <h3>FROM</h3>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={onOptionChangeFrom}
                  defaultValue="Выберите валюту"
                >
                  <option disabled>Выберите валюту</option>
                  <option>Российский Рубль</option>
                  {currenciesElement}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="input"
                  type="number"
                  disabled={!(isCurrencyFromSelected && isCurrencyToSelected)}
                  min="0"
                  value={inputCurrency}
                  onChange={onInputChange}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>
                  <h3>TO</h3>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={onOptionChangeTo}
                  defaultValue="Выберите валюту"
                >
                  <option disabled>Выберите валюту</option>
                  <option>Российский Рубль</option>
                  {currenciesElement}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control as="input" value={outputCurrency} disabled={true} readOnly />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Convertor;