import Layout from "@/components/layout";

export default function Home() {
  return <div className="h-[1000px]">Text</div>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
