
export default () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 1,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    }
  }
})
