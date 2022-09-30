import * as Realm from "realm-web";

type Props = {
  APP_ID: string;
};

const useRealm = ({ APP_ID }: Props) => {
  const config = {
    id: String(APP_ID),
  };

  const clientRealm = new Realm.App(config);

  const register = (email: string, password: string) => {
    clientRealm.emailPasswordAuth.registerUser(email, password);
  };

  return { clientRealm, register };
};

export default useRealm;
