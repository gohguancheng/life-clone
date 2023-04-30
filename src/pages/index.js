import Layout from "@/components/layout";

export default function Home() {
  return <div className="">Text</div>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
