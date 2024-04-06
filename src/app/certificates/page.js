import Navbar from "../components/navbar";
import Footer from '../components/footer';
import "../../../public/noScrollbar.css";

export default function Certifications() {
  const cert = [
    {
      title: "asdavave",
      desc: "adsq r3wfrw 54yerysrgg sadasd asdasd asdlkjas laskdnalsdk asldknasdlk asldknwerwer",
      img: "",
    },
    {
      title: "asdavave",
      desc: "adsq r3wfrw 54yerysrgg werwer",
      img: "",
    },
    {
      title: "asdavave",
      desc: "adsq r3wfrw 54yerysrgg werwer",
      img: "",
    },
  ];
  return (
    <main className="bg-primary-dark text-secondary-light font-sans h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-[98%] rounded-lg mb-5 bg-secondary-dark mx-auto align-middle overflow-scroll noScrollBar">
        <div className="w-full overflow-scroll noScrollBar">
          <div className="w-full text-center">
            <div className="h-[100px] mx-auto"></div>
            {cert.map((cert, id) => (
              <div className="flex flex-row gap-10 group">
                <div
                  key={id}
                  className="w-[600px] h-[400px] my-5 mx-auto p-3 text-secondary-light"
                >
                  <div className="mt-28 opacity-0 transition duration-200 group-hover:opacity-100">
                    <div className="text-3xl mb-5">{cert.title}</div>
                    <div className="text-lg w-[85%] mx-auto">{cert.desc}</div>
                  </div>
                </div>
                <div
                  key={id}
                  className="w-[600px] h-[400px] my-5 mx-auto p-3 rounded-xl bg-primary-dark text-secondary-light certies"
                >
                  <div className="h-full w-full bg-white rounded-lg"></div>
                </div>
              </div>
            ))}
            <div className="h-[100px] mx-auto"></div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
