import Head from "next/head";

interface Props {
  reqId: string;
}

export default function ConcurrentHeadPage({ reqId }: Props) {
  return (
    <div>
      <Head>
        <title>{`req-${reqId}`}</title>
        <meta name="req-id" content={reqId} />
      </Head>
      <h1 data-testid="req-id">{reqId}</h1>
    </div>
  );
}

export async function getServerSideProps(context: { query: { id?: string } }) {
  return {
    props: {
      reqId: context.query.id ?? "unknown",
    },
  };
}
