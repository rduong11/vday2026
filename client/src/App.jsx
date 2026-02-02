import { useState } from "react";
import debbyRyanEmoji from "./assets/debby_ryan_emoji.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isValentine, setIsValentine] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: 0, left: 0 });
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);

  const moveNoButton = () => {
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 100 - 50;
    setNoButtonPos({ top: `${y}px`, left: `${x}px` });

    // Make Yes bigger and No smaller
    setYesScale((prev) => Math.min(prev + 0.2, 2.5));
    setNoScale((prev) => Math.max(prev - 0.1, 0.4));
  };

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 overflow-hidden">
      {!isValentine ? (
        <>
          <h1 className="text-6xl font-bold text-rose-600 font-serif italic mb-8">
            OPEN ME!
          </h1>
          <div className="relative flex flex-col items-center gap-8">
            {/* ENVELOPE CONTAINER */}
            <div
              className="relative w-80 h-52 group cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              {/* PAPER PEEK (visible on hover) */}
              <div className="absolute left-4 right-4 bottom-4 h-32 bg-white rounded-t-lg shadow-md border border-rose-100 z-20 transition-transform duration-300 ease-out group-hover:-translate-y-8"></div>

              {/* 1. THE ENVELOPE BACK */}
              <div className="absolute inset-0 bg-rose-300 rounded-b-xl z-10 shadow-sm"></div>

              {/* 2. THE ENVELOPE FRONT (The pocket) */}
              <div className="absolute inset-0 z-30 bg-rose-400 rounded-b-xl [clip-path:polygon(0%_0%,50%_50%,100%_0%,100%_100%,0%_100%)]"></div>

              {/* 3. THE TOP FLAP */}
              <div className="absolute top-0 inset-x-0 h-32 bg-rose-500 rounded-t-xl transition-all duration-300 ease-out origin-top z-40 [clip-path:polygon(0%_0%,100%_0%,50%_55%)] group-hover:transform-[rotateX(25deg)]"></div>

              {/* Floor Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-64 h-6 bg-rose-200/50 blur-xl rounded-full -z-10"></div>
            </div>
          </div>

          {/* LETTER MODAL */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-300"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 border-4 border-rose-100 animate-in zoom-in duration-500"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col h-full text-rose-600 font-serif">
                  <h2 className="text-2xl font-bold mb-4">My Angel(a),</h2>
                  <p className="text-base leading-relaxed ">Roses are red</p>
                  <p className="text-base leading-relaxed ">Violets are blue</p>
                  <p className="text-base leading-relaxed ">
                    Thinking of this, I couldn't stay in bed
                  </p>
                  <p className="text-base leading-relaxed ">
                    So I wanted to ask you,
                  </p>

                  <div className="mt-4 pt-6 border-t-2 border-rose-100 text-center">
                    <p className="font-bold text-xl mb-6">
                      Will you be my Valentine?
                    </p>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => setIsValentine(true)}
                        style={{
                          transform: `scale(${yesScale})`,
                        }}
                        className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-all duration-300 shadow-lg active:scale-95 font-sans font-semibold"
                      >
                        Yes
                      </button>
                      <button
                        onMouseEnter={moveNoButton}
                        style={{
                          transform: `translate(${noButtonPos.left}, ${noButtonPos.top}) scale(${noScale})`,
                        }}
                        className="bg-gray-200 text-gray-500 px-8 py-3 rounded-full transition-all duration-200 font-sans font-semibold"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Success Screen */
        <div className="text-center space-y-6 animate-in zoom-in duration-500">
          <img
            src={debbyRyanEmoji}
            alt="celebration"
            className="w-48 h-48 mx-auto rounded-full object-cover"
          />
          <h2 className="text-5xl font-bold text-rose-600 font-serif italic">
            GET READY FOR SOME QUESABIRRIA FLAUTAS!
          </h2>
          <p className="text-rose-400 text-xl font-medium uppercase tracking-widest">
            See you on the 13th! ❤️
          </p>
          <button
            onClick={() => {
              setIsValentine(false);
              setIsOpen(false);
              setYesScale(1);
              setNoScale(1);
            }}
            className="mt-12 text-rose-300 text-sm hover:text-rose-500 transition-colors underline underline-offset-4"
          >
            Open it again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
