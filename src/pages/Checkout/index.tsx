import { useState } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Card from '../../components/Card'

import { colors } from '../../styles'
import boletoIcon from '../../assets/images/boleto.png'
import cartaoIcon from '../../assets/images/cartao.png'
import { usePurchaseMutation } from '../../services/api'

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

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      digitalEmail: '',
      confirmEmail: '',
      cardOwner: '',
      cardOwnerCpf: '',
      cardName: '',
      cardNumber: '',
      cardExpireMonth: '',
      cardExpireYear: '',
      cardCvv: '',
      installments: 1
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Obrigatório'),
      cpf: Yup.string()
        .min(14, 'O cpf precisa ter pelo menos 14 caracteres')
        .max(14, 'O cpf precisa ter pelo menos 14 caracteres')
        .required('Obrigatório'),
      email: Yup.string().email('Email inválido').required('Obrigatório'),
      digitalEmail: Yup.string()
        .email('Email inválido')
        .required('Obrigatório'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('digitalEmail')], 'Os emails são diferentes')
        .required('Obrigatório'),
      cardOwner: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('Obrigatório') : schema
      ),
      cardOwnerCpf: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('Obrigatório') : schema
      ),
      cardName: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('Obrigatório') : schema
      ),
      cardNumber: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('Obrigatório') : schema
      ),
      cardExpireMonth: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('Obrigatório') : schema
      ),
      cardExpireYear: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('Obrigatório') : schema
      ),
      cardCvv: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('Obrigatório') : schema
      ),
      installments: Yup.string().when((_, schema) =>
        payWithCard ? schema.required('Obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.name
        },
        delivery: {
          email: values.digitalEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCvv),
            name: values.cardName,
            number: values.cardNumber,
            owner: {
              document: values.cardOwnerCpf,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (field: string, message?: string) => {
    const isTouched = field in form.touched
    const isInvalid = field in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br /> Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: <strong>{data.orderId}</strong> <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de Crédito' : 'Boleto Bancário'}
            </p>
            <p style={{ marginTop: '24px' }}>
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis.
              <br /> Após a aprovação do pagamento, enviaremos um e-mail
              contendo o código de ativação do jogo.
            </p>
            <p style={{ marginTop: '24px' }}>
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. <br /> Você receberá o código no e-mail
              cadastrado em nossa loja.
            </p>
            <p style={{ marginTop: '24px' }}>
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação.
              <br /> Caso tenha alguma dúvida ou necessite de mais informações,
              por favor, entre em contato conosco através dos nossos canais de
              atendimento ao cliente.
            </p>
            <p style={{ marginTop: '24px' }}>
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <Row>
                <div className="form-control">
                  <label htmlFor="name">Nome completo</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="name"
                    type="text"
                    value={form.values.name}
                  />
                  <small>{getErrorMessage('name', form.errors.name)}</small>
                </div>
                <div className="form-control">
                  <label htmlFor="email">E-mail</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="email"
                    type="email"
                    value={form.values.email}
                  />
                  <small>{getErrorMessage('email', form.errors.email)}</small>
                </div>
                <div className="form-control">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="cpf"
                    type="text"
                    value={form.values.cpf}
                  />
                  <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
                </div>
              </Row>
              <h3 className="mg-top-2">Dados de entrega - conteúdo digital</h3>
              <Row>
                <div className="form-control">
                  <label htmlFor="digitalEmail">E-mail</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="digitalEmail"
                    type="email"
                    value={form.values.digitalEmail}
                  />
                  <small>
                    {getErrorMessage('digitalEmail', form.errors.digitalEmail)}
                  </small>
                </div>
                <div className="form-control">
                  <label htmlFor="confirmEmail">Confirme o e-mail</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="confirmEmail"
                    type="email"
                    value={form.values.confirmEmail}
                  />
                  <small>
                    {getErrorMessage('confirmEmail', form.errors.confirmEmail)}
                  </small>
                </div>
              </Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
                type="button"
              >
                <img src={boletoIcon} alt="Boleto" />
                Boleto Bancário
              </TabButton>
              <TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
                type="button"
              >
                <img src={cartaoIcon} alt="Cartão" />
                Cartão de Crédito
              </TabButton>
              <div style={{ marginTop: '24px' }}>
                {payWithCard ? (
                  <>
                    <Row>
                      <div className="form-control">
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardOwner"
                          type="text"
                          value={form.values.cardOwner}
                        />
                        <small>
                          {getErrorMessage('cardOwner', form.errors.cardOwner)}
                        </small>
                      </div>
                      <div className="form-control">
                        <label htmlFor="cardOwnerCpf">CPF</label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardOwnerCpf"
                          type="text"
                          value={form.values.cardOwnerCpf}
                        />
                        <small>
                          {getErrorMessage(
                            'cardOwnerCpf',
                            form.errors.cardOwnerCpf
                          )}
                        </small>
                      </div>
                    </Row>
                    <Row style={{ marginTop: '24px' }}>
                      <div className="form-control">
                        <label htmlFor="cardName">Nome no cartão</label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardName"
                          type="text"
                          value={form.values.cardName}
                        />
                        <small>
                          {getErrorMessage('cardName', form.errors.cardName)}
                        </small>
                      </div>
                      <div className="form-control">
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardNumber"
                          type="text"
                          value={form.values.cardNumber}
                        />
                        <small>
                          {getErrorMessage(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
                      </div>
                      <div
                        className="form-control"
                        style={{ maxWidth: '123px' }}
                      >
                        <label htmlFor="cardExpireMonth">
                          Mês de vencimento
                        </label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardExpireMonth"
                          type="text"
                          value={form.values.cardExpireMonth}
                        />
                        <small>
                          {getErrorMessage(
                            'cardExpireMonth',
                            form.errors.cardExpireMonth
                          )}
                        </small>
                      </div>
                      <div
                        className="form-control"
                        style={{ maxWidth: '123px' }}
                      >
                        <label htmlFor="cardExpireYear">
                          Ano de vencimento
                        </label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardExpireYear"
                          type="text"
                          value={form.values.cardExpireYear}
                        />
                        <small>
                          {getErrorMessage(
                            'cardExpireYear',
                            form.errors.cardExpireYear
                          )}
                        </small>
                      </div>
                      <div
                        className="form-control"
                        style={{ maxWidth: '48px' }}
                      >
                        <label htmlFor="cardCvv">CVV</label>
                        <input
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardCvv"
                          type="text"
                          value={form.values.cardCvv}
                        />
                        <small>
                          {getErrorMessage('cardCvv', form.errors.cardCvv)}
                        </small>
                      </div>
                    </Row>
                    <Row style={{ marginTop: '24px' }}>
                      <div
                        className="form-control"
                        style={{ maxWidth: '150px' }}
                      >
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="installments"
                          value={form.values.installments}
                        >
                          <option>1x de R$ 200,00</option>
                          <option>2x de R$ 200,00</option>
                          <option>3x de R$ 200,00</option>
                        </select>
                        <small>
                          {getErrorMessage(
                            'installments',
                            form.errors.installments
                          )}
                        </small>
                      </div>
                    </Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adiquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button type="submit" title="Clique aqui para finalizar a compra">
            Finalizar comprar
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
