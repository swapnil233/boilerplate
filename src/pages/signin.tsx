import { Stack, useMantineTheme } from "@mantine/core";
import { GetServerSidePropsContext } from "next";
import { getCsrfToken, getProviders, getSession } from "next-auth/react";
import { Provider } from "next-auth/providers/index";
import { AuthenticationForm } from "@/components/auth/AuthenticationForm";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(context),
    },
  };
}

interface ISignInPage {
  providers: Provider[];
}

const SignInPage: React.FC<ISignInPage> = ({ providers }) => {
  const theme = useMantineTheme();
  return (
    <>
      <Stack
        w={"100%"}
        h={"100vh"}
        justify="center"
        align="center"
        bg={theme.colors.dark[8]}
      >
        <AuthenticationForm providers={providers} type="login" />
      </Stack>
    </>
  );
};

export default SignInPage;
