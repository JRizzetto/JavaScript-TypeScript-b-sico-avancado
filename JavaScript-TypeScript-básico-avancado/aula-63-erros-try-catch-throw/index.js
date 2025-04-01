// try {
//   // Executado se não houver erro
// } catch(error) {
//   // Executado se há erros
// } finally {
//   // Sempre é executado
// }

// try {
//   console.log(a);
//   console.log("Manipulei o arquivo erro");
//   console.log("Fechei o arquivo");

//   try {
//     console.log("Executando arquivo dentro do bloco")
//     console.log("Dentro do bloco")
//   }catch {
//     console.log("Dentro do catch deu erro")
//   }
// } catch (error) {
//   console.log("Tratando o erro");
// } finally {
//   console.log("FINALLY: Mesmo assim sou executado");
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando a instância de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora(data);
  console.log(hora);
} catch (error) {
  //
} finally {
  console.log("Tenha um bom dia!");
}
