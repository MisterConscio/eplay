import { useState } from 'react'
import styled from 'styled-components'

import Button from '../../components/Button'
import Card from '../../components/Card'

import { colors } from '../../styles'
import boletoIcon from '../../assets/images/boleto.png'
import cartaoIcon from '../../assets/images/cartao.png'

const Row = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  .form-control {
    flex: auto;

    label {
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
    }

    input,
    select {
      height: 32px;
      width: 100%;
      padding: 0 8px;
      border: 1px solid ${colors.white};
      background-color: ${colors.white};
    }
  }
`

const TabButton = styled.button<{ isActive?: boolean }>`
  img {
    display: inline-block;
    margin-right: 8px;
  }

  border-radius: 8px;
  border: none;

  height: 32px;
  margin-right: 16px;
  padding: 0 8px;

  font-size: 14px;
  font-weight: bold;

  cursor: pointer;

  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
`

const CardForm = () => (
  <>
    <Row>
      <div className="form-control">
        <label htmlFor="card-owner">Nome do titular do cartão</label>
        <input id="card-owner" type="text" />
      </div>
      <div className="form-control">
        <label htmlFor="card-owner-cpf">CPF</label>
        <input id="card-owner-cpf" type="text" />
      </div>
    </Row>
    <Row style={{ marginTop: '24px' }}>
      <div className="form-control">
        <label htmlFor="card-name">Nome no cartão</label>
        <input id="card-name" type="text" />
      </div>
      <div className="form-control">
        <label htmlFor="card-number">Número do cartão</label>
        <input id="card-number" type="text" />
      </div>
      <div className="form-control" style={{ maxWidth: '123px' }}>
        <label htmlFor="card-expire-month">Mês de vencimento</label>
        <input id="card-expire-month" type="text" />
      </div>
      <div className="form-control" style={{ maxWidth: '123px' }}>
        <label htmlFor="card-expire-year">Ano de vencimento</label>
        <input id="card-expire-year" type="text" />
      </div>
      <div className="form-control" style={{ maxWidth: '48px' }}>
        <label htmlFor="card-cvv">CVV</label>
        <input id="card-cvv" type="number" />
      </div>
    </Row>
    <Row style={{ marginTop: '24px' }}>
      <div className="form-control" style={{ maxWidth: '150px' }}>
        <label htmlFor="installments">Parcelamento</label>
        <select id="installments">
          <option>1x de R$ 200,00</option>
          <option>2x de R$ 200,00</option>
          <option>3x de R$ 200,00</option>
        </select>
      </div>
    </Row>
  </>
)

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <div className="form-control">
              <label htmlFor="name">Nome completo</label>
              <input id="name" type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </div>
            <div className="form-control">
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </div>
          </Row>
          <h3 className="mg-top-2">Dados de entrega - conteúdo digital</h3>
          <Row>
            <div className="form-control">
              <label htmlFor="digital-email">E-mail</label>
              <input id="digital-email" type="email" />
            </div>
            <div className="form-control">
              <label htmlFor="confirm-email">Confirme o e-mail</label>
              <input id="confirm-email" type="email" />
            </div>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boletoIcon} alt="Boleto" />
            Boleto Bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartaoIcon} alt="Cartão" />
            Cartão de Crédito
          </TabButton>
          <div style={{ marginTop: '24px' }}>
            {payWithCard ? (
              <CardForm />
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adiquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar comprar
      </Button>
    </div>
  )
}

export default Checkout
