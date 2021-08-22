/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
import React, { useState } from 'react'

import styles from './styles.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppFormProps {}

const AppForm: StorefrontFunctionComponent<AppFormProps> = ({}) => {
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [celular, setCelular] = useState<string>('')
  const [mensagem, setMensagem] = useState<string>('')

  function handleSend(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault()

    // eslint-disable-next-line @typescript-eslint/no-shadow
    function validateEmail(email: string) {
      const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

      if (reg.test(email)) {
        return true
      }

      return false
    }

    if (
      nome !== '' &&
      nome.length > 1 &&
      validateEmail(email) &&
      celular !== ''
    ) {
      setMensagem('Cadastrado com sucesso!')
    } else {
      setMensagem('Dados inválidos!')
    }
  }

  return (
    <div className={styles.Container}>
      <form className={styles.Formulario} autoComplete="off">
        <h2 className={styles.HeadingTitulo}>Inscreva-se já!</h2>
        <input
          className={styles.inputForms}
          autoComplete="off"
          type="text"
          name="Nome"
          id="nome"
          value={nome}
          onChange={(e: any) => setNome(e.target.value)}
          required
          placeholder="Nome"
        />
        <input
          className={styles.inputForms}
          autoComplete="off"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <input
          className={styles.inputForms}
          autoComplete="off"
          type="text"
          name="celular"
          id="celular"
          value={celular}
          onChange={(e: any) => setCelular(e.target.value)}
          required
          placeholder="celular"
        />
        <input
          className={styles.inputButton}
          type="submit"
          value="Enviar"
          name="btnEnviar"
          id="btnEnviar"
          onClick={e => handleSend(e)}
        />
        <p className={styles.Mensagem}>{mensagem}</p>
      </form>
    </div>
  )
}

export default AppForm
