import React, { useState } from 'react';
import './App.css'
// needed finalization tag "/" like in <img/>

export default function App() {
  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

  // Components
  const Tela = (valor, res) => {
    return (
      <div className='css-tela'>
        <span className="css-tela-oper">{valor}</span>
        <span className="css-tela-res">{res}</span>
      </div>
    )
  }

  const Btn = (label, onClick) => {
    return (
      <button className='css-btn' onClick={onClick}>{label}</button>
    )
  }

  // Functions
  const addDigitoTela = (d) => {
    if ((d == '+' || d == '-' || d == '*' || d == '/') && operado) {
      setOperado(false)
      setValorTela(resultado + d)
      return
    }
    if (operado) {
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitadoTela = valorTela + d
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const operacao = (oper) => {
    if (oper == 'bs') {
      let vTela = valorTela
      vTela = vTela.substring(0, (vTela.length - 1))
      setValorTela(vTela)
      setOperado(false)
      return
    }
    try {
      const r = eval(valorTela) // Calculation
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    } catch {
      setResultado('ERRO')
    }
  }

  // const listButtons = () => {
  //   const btns = [['AC', 'lm'], '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', ['<-', 'op'], ['=', 'op']]
  //   btns.forEach(
  //     (e) => {
  //       if (typeof (e) == 'object') {
  //         if (e[1] == 'lm') {
  //           Btn(e[0], limparMemoria)
  //         } else {
  //           Btn(e[0], () => operacao(e[0]))
  //         }
  //       } else {
  //         Btn(e, () => addDigitoTela(e))
  //       }
  //     }
  //   )
  // }

  return (
    <>
      <div className="css-container">
        <h3>Calculadora Matemática Simples</h3>
        {Tela(valorTela, resultado)}
        <div className="css-botoes">
          {Btn('AC', limparMemoria)}
          {Btn('(', () => addDigitoTela('('))}
          {Btn(')', () => addDigitoTela(')'))}
          {Btn('/', () => addDigitoTela('/'))}
          {Btn('7', () => addDigitoTela('7'))}
          {Btn('8', () => addDigitoTela('8'))}
          {Btn('9', () => addDigitoTela('9'))}
          {Btn('*', () => addDigitoTela('*'))}
          {Btn('4', () => addDigitoTela('4'))}
          {Btn('5', () => addDigitoTela('5'))}
          {Btn('6', () => addDigitoTela('6'))}
          {Btn('-', () => addDigitoTela('-'))}
          {Btn('1', () => addDigitoTela('1'))}
          {Btn('2', () => addDigitoTela('2'))}
          {Btn('3', () => addDigitoTela('3'))}
          {Btn('+', () => addDigitoTela('+'))}
          {Btn('.', () => addDigitoTela('.'))}
          {Btn('0', () => addDigitoTela('0'))}
          {Btn('<-', () => operacao('bs'))}
          {Btn('=', () => operacao('='))}
          {/* {listButtons()} */}
        </div>
      </div>
    </>
  )
}