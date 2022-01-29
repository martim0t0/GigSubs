import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <div className="hero">TEST</div>

      <div className="flex-container">
        <h1>Homepage</h1>
        <p className="card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ullam
          pariatur cum voluptas, officia voluptatem, at incidunt blanditiis quod
          facere sequi? Quis ratione repudiandae voluptates eos reiciendis vel
          quaerat solutaoo.
        </p>
        <p className="card">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, impedit
          explicabo tenetur quasi laboriosam expedita eaque quod ex assumenda
          iusto perspiciatis eius, nemo commodi libero perferendis provident
          fuga id voluptatem!
        </p>
      </div>
    </div>
  );
}
