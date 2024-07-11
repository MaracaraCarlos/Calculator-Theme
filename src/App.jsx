import { useContext, useEffect, useState } from 'react'
import Button from './components/Button'
import ClearButton from './components/ClearButton'
import Header from './components/Header'
import Screen from './components/Screen'
import { operators, numbers } from './constants'
import { ThemeContext } from './context/ThemeContext'
import DeleteBtn from './components/DeleteBtn'
import EqualBtn from './components/EqualBtn'

function App () {
  const [input, setInput] = useState('0')
  const [output, setOutput] = useState('0')
  const [calculatorData, setCalculatorData] = useState('')

  const { tema } = useContext(ThemeContext)

  const handleSubmit = () => {
    // eslint-disable-next-line no-eval
    const total = eval(calculatorData)
    setInput(total)
    setOutput(`${total} = ${total}`)
    setCalculatorData(`${total}`)
  }

  const handleClear = () => {
    setInput('0')
    setCalculatorData('')
  }

  const handleNumbers = (value) => {
    if (!calculatorData.length) {
      setInput(`${value}`)
      setCalculatorData(`${value}`)
    } else {
      if (value === 0 && (calculatorData === '0' || input === '0')) {
        setCalculatorData(`${calculatorData}`)
      } else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1)
        const isLastChatOperator = lastChat === '*' || operators.includes(lastChat)

        setInput(isLastChatOperator ? `${value}` : `${input}${value}`)
        setCalculatorData(`${calculatorData}${value}`)
      }
    }
  }
  const dotOperator = () => {
    const lastChat = calculatorData.charAt(calculatorData.length - 1)

    if (!calculatorData.length) {
      setInput('0.')
      setCalculatorData('0.')
    } else {
      if (lastChat === '*' || operators.includes(lastChat)) {
        setInput('0.')
        setCalculatorData(`${calculatorData} 0.`)
      } else {
        setInput(
          lastChat === '.' || input.includes('.') ? `${input}` : `${input}.`
        )
        const formattedValue =
          lastChat === '.' || input.includes('.')
            ? `${calculatorData}`
            : `${calculatorData}.`
        setCalculatorData(formattedValue)
      }
    }
  }

  const handleOperators = (value) => {
    if (calculatorData.length) {
      setInput(`${value}`)
      const beforeLastChat = calculatorData.charAt(calculatorData.length - 2)

      const beforeLastChatIsOperator =
        operators.includes(beforeLastChat) || beforeLastChat === '*'

      const lastChat = calculatorData.charAt(calculatorData.length - 1)

      const lastChatIsOperator = operators.includes(lastChat) || lastChat === '*'

      const validOp = value === 'x' ? '*' : value
      if ((lastChatIsOperator && value !== '-') || (beforeLastChatIsOperator && lastChatIsOperator)) {
        if (beforeLastChatIsOperator) {
          const updatedValue = `${calculatorData.substring(
            0,
            calculatorData.length - 2
          )}${value}`
          setCalculatorData(updatedValue)
        } else {
          setCalculatorData(`${calculatorData.substring(0, calculatorData.length - 1)}${validOp}`)
        }
      } else {
        setCalculatorData(`${calculatorData}${validOp}`)
      }
    }
  }

  const handleDelete = () => {
    if (calculatorData.length) {
      const deleteLastCharacter = calculatorData.slice(0, -1)
      setCalculatorData(deleteLastCharacter)
      setInput(deleteLastCharacter)
    }
  }

  const handleInput = (value) => {
    const number = numbers.find((num) => num === value)
    const operator = operators.find((op) => op === value)

    switch (value) {
      case '=':
        handleSubmit()
        break
      case 'RESET':
        handleClear()
        break
      case 'DEL':
        handleDelete()
        break
      case number:
        handleNumbers(value)
        break
      case '.':
        dotOperator(value)
        break
      case operator:
        handleOperators(value)
        break
      default:
        break
    }
  }

  const handleOutput = () => {
    setOutput(calculatorData)
  }

  useEffect(() => {
    handleOutput()
  }, [calculatorData])

  return (
    <div className={`fake_body ${tema === 1 ? 'body__theme1' : ''} ${tema === 2 ? 'body__theme2' : ''} ${tema === 3 ? 'body__theme3' : ''}`}>
      <div className='container'>
        <Header />
        <Screen
          input={input}
          output={output}
        />
        <div className={`board ${tema === 1 ? 'board__theme1' : ''} ${tema === 2 ? 'board__theme2' : ''} ${tema === 3 ? 'board__theme3' : ''}`}>
          <div className='board__row'>
            <Button handleInput={handleInput}>{parseInt(7)}</Button>
            <Button handleInput={handleInput}>{parseInt(8)}</Button>
            <Button handleInput={handleInput}>{parseInt(9)}</Button>
            <DeleteBtn handleInput={handleInput}>DEL</DeleteBtn>
          </div>
          <div className='board__row'>
            <Button handleInput={handleInput}>{parseInt(4)}</Button>
            <Button handleInput={handleInput}>{parseInt(5)}</Button>
            <Button handleInput={handleInput}>{parseInt(6)}</Button>
            <Button handleInput={handleInput}>+</Button>
          </div>
          <div className='board__row'>
            <Button handleInput={handleInput}>{parseInt(1)}</Button>
            <Button handleInput={handleInput}>{parseInt(2)}</Button>
            <Button handleInput={handleInput}>{parseInt(3)}</Button>
            <Button handleInput={handleInput}>-</Button>
          </div>
          <div className='board__row'>
            <Button handleInput={handleInput}>.</Button>
            <Button handleInput={handleInput}>{parseInt(0)}</Button>
            <Button handleInput={handleInput}>/</Button>
            <Button handleInput={handleInput}>*</Button>
          </div>
          <div className='board__row'>
            <ClearButton handleInput={handleInput}>RESET</ClearButton>
            <EqualBtn handleInput={handleInput}>=</EqualBtn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
