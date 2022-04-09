new TypeWriter(`#typer`, {
    loop: true,
    cursor: {
      speed: 700,
      size: 'larger',
      id: 'none',
      enabled: true
    },
    timeout: 50
  })
  .write(`Developer`)
  .wait(2000)
  .removeAll()
  .write(`Tinkerer`)
  .wait(2000)
  .removeAll()
  .write(`Mashed Potato Enthusiast`)
  .wait(2000)
  .removeAll()
  .start();
