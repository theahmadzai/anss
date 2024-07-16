

export default function Signout() {
  // const { instance, inProgress } = useMsal();
  // const isAuthenticated = useIsAuthenticated();
  //
  //
  // const handleLogout = useCallback(async function() {
  //   if(inProgress === InteractionStatus.None && isAuthenticated) {
  //     const logoutRequest = {
  //       account: instance.getActiveAccount(),
  //     };
  //     await instance.logoutRedirect(logoutRequest);
  //     // await instance.logoutPopup(logoutRequest);
  //   }
  //
  //   await navigate("/");
  //   return null;
  // }, [inProgress, instance, isAuthenticated]);
  //
  // useEffect(() => {
  //   handleLogout();
  // }, [handleLogout]);


  return (
    <Layout>
      <Spin spinning></Spin>
    </Layout>
  );
}

export const Head = () => <SEO title="login" pathname="/auth/login" />;
