import Dashboard from "@/components/dashboard";
import Parse from "parse/node";

export default function Home() {
  Parse.initialize(process.env.APP_ID, process.env.JS_KEY);
  Parse.serverURL = process.env.SERVER_URL;
  const gallery = new Parse.Object("gallery");
  console.log(gallery);
  return (
    <main className="">
      <Dashboard />
    </main>
  );
}
