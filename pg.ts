
type Greeting = {
  msg: string
}

type InferHelloProps<T> = T extends () => Promise<{props: infer T}> ? T : never;

export const getHelloProps = async function() {
  const greeting: Greeting = { msg: 'Hello people'}

  return {
    props: {
      greeting,
      data: {
        cars: ['cars', 'helicopter-helicopter']
      }
    }
  }

  function sayHello(props: InferHelloProps<typeof getHelloProps>) {
    console.log(props.greeting)
  }

  const data = await getHelloProps();
  sayHello(data.props)
}