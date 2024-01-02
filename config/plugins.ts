
export default () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 1,
      maxLimit: 10000,
      apolloServer: {
        tracing: true,
      },
    }
  }
})
