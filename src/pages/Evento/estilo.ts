import styled from 'styled-components'

export const CadastroEventos = styled.div`
  width: 100%;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 700px;
    margin: 0 auto;
    margin-top: 100px;

    input {
      margin: 3px 0;
      padding: 4px;
    }

    button {
      padding: 4px;
      background: lightblue;
      color: #000000;
      border: none;
      cursor: pointer;
    }

    input, button {
      border-radius: 6px;
      font-size: 24px;
    }

    button:hover {
      transform: scale(1.1);
    }
  }
`
export const TodosEventos = styled.div`
  width: 700px;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid lightblue;
  padding: 6px;
  border-radius: 4px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 12px;
    }
  }

  div + div {
    margin-top: 8px;
  }

  div + div {
    button {
      cursor: pointer;
      border-radius: 6px;
    }

    button {
      padding: 4px;
      background: lightblue;
      border: none;
      color: #FFF;
      font-weight: bold;
    }

    button + button {
      margin-left: 4px;
      background: red;
      border: none;
      color: #FFF;
      font-weight: bold;
    }

    button:hover {
      color: black;
    }
  }

`
