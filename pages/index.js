import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ullam
        pariatur cum voluptas, officia voluptatem, at incidunt blanditiis quod
        facere sequi? Quis ratione repudiandae voluptates eos reiciendis vel
        quaerat soluta.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, impedit
        explicabo tenetur quasi laboriosam expedita eaque quod ex assumenda
        iusto perspiciatis eius, nemo commodi libero perferendis provident fuga
        id voluptatem!
      </p>
      <Footer />
    </div>
  );
}
