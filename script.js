const { useState } = React;

function App() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fbcfe8', '#ffffff', '#db2777']
    });
  };

  const openGift = () => {
    setGiftOpened(true);
    triggerConfetti();
    setTimeout(() => setShowBtn(true), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-pink-50 via-white to-pink-100">

      <div className="text-center mb-8">
        <h1 className="text-5xl font-pacifico text-pink-500 mb-4 animate-wiggle">
          Happy Teddy Day!
        </h1>
        <p className="text-2xl font-dancing text-pink-700 font-bold">
          Specifically for the sweetest person...
        </p>
        <h2 className="text-6xl font-pacifico text-pink-600 mt-2 mb-6">
          EVA
        </h2>
      </div>

      <div className="w-full max-w-md bg-white/70 rounded-3xl p-8 shadow-2xl border border-pink-100 text-center">

        {!giftOpened ? (
          <>
            <p className="font-dancing text-xl text-pink-600 mb-6 font-semibold">
              I found something special for you. Go on, take a look!
            </p>

            <button
              onClick={openGift}
              className="px-6 py-3 bg-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 transition"
            >
              Open Gift 🎁
            </button>
          </>
        ) : (
          <>
            <div className="bg-pink-100 rounded-2xl p-6 border-2 border-pink-200 shadow-inner">
              <p className="text-3xl font-dancing text-pink-700 font-bold">
                "You are the cutest Teddy I've ever found! Happy Teddy Day,