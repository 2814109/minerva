import * as Realm from "realm-web";

type Props = {
  APP_ID: string;
};

const useRealm = ({ APP_ID }: Props) => {
  const clientRealm = new Realm.App({
    id: String(APP_ID),
  });

  return { clientRealm };
};

export default useRealm;
