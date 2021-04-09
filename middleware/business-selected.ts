export default function ({ store, redirect, route }: any) {
  if (
    !store.state.business.currentBusiness &&
    route.path !== '/choose-business'
  ) {
    return redirect('/choose-business')
  }
}
