export function GradientismPage() {
  const content = {
    description:
      "The belief that value is intrinsically defined by a system's own judgment of its capacity to perceive, generate, and sustain energy gradients that enable continued dissipation and evolution.",
    goal: "To create a hybrid of science and religion by combining religion's aspirations, community-building practices, and moral principles; with science's undeniable empirical epistemology.",
    premisesHeading: "Premises",
    tiers: [
      {
        title: "Tier 1: Foundational Physics",
        premises: [
          {
            title: "1. Conservation and Degradation",
            content:
              "Energy cannot be created or destroyed, only transformed; however, each transformation increases entropy, degrading energy's ability to perform work.",
            citation:
              "Rudolf Clausius (1865) — Formulated the second law of thermodynamics: energy is conserved but degrades in quality through entropy increase.",
          },
          {
            title: "2. Finite Substrate Implies Inevitable Competition",
            content:
              "Since the universe contains a limited supply of low-entropy matter and energy, any system's growth reduces what is available to others.",
            citation:
              "Garrett Hardin (1968) — In The Tragedy of the Commons, showed that finite resources inevitably provoke competition among self-interested systems.",
          },
        ],
      },
      {
        title: "Tier 2: System Dynamics",
        premises: [
          {
            title: "1. Persistence Requires Dissipation",
            content:
              "All open systems that maintain structure far from equilibrium, persist only by consuming low-entropy energy and exporting entropy to their surroundings.",
            citation:
              'Ilya Prigogine (1977) — Demonstrated that self-organizing "dissipative structures" persist by exporting entropy while consuming energy gradients.',
          },
          {
            title: "2. Selection Favors Greater Dissipation",
            content:
              "Systems that capture and dissipate energy more effectively grow, replicate, and outcompete less dissipative systems.",
            citation:
              "Jeremy L. England (2013) — Proposed dissipation-driven adaptation: physical systems naturally evolve toward states that dissipate energy more efficiently.",
          },
        ],
      },
      {
        title: "Tier 3: Complex Adaptations",
        premises: [
          {
            title: "1. Intelligence as Predictive Dissipation",
            content:
              "Adaptive systems survive by minimizing informational free energy; reducing prediction error between internal models and external reality through Bayesian updating.",
            citation:
              "Karl Friston (2010) — The free-energy principle: adaptive intelligence minimizes surprise (informational free energy) to stabilize thermodynamic flow.",
          },
          {
            title: "2. Cooperative Integration",
            content:
              "Distinct biological systems merge or collaborate to capture and dissipate energy gradients that neither could access alone, reducing internal friction for shared thermodynamic gain. From single cells merging (endosymbiosis) to human tribes, cooperation achieves economies of scale in energy capture.",
            citation:
              "Lynn Margulis (1967) — Demonstrated through endosymbiotic theory that complex life evolved not just through competition, but through the cooperative merging of simpler organisms to share metabolic functions.",
          },
          {
            title: "3. Exosomatic Evolution",
            content:
              "The development of non-biological tools and machines that allow a system to outsource and radically scale its capacity to capture, store, and dissipate energy. A human body can only process about 100 watts of energy biologically. Technology allows us to harness thousands of times that amount by using external substrates (fire, fossil fuels, solar, fission).",
            citation:
              'Alfred J. Lotka (1945) — Proposed the law of maximum energy flux, noting that human evolution shifted from biological mutations to "exosomatic" (outside-the-body) tools to maximize energy capture.',
          },
          {
            title: "4. Cultural Information Transmission",
            content:
              "The use of language, myth, and culture to compress, store, and transmit low-entropy survival information across generations, allowing millions of individual agents to act as a single, synchronized dissipative structure. DNA takes thousands of years to adapt to new environments; culture allows a society to adapt its gradient-capture strategies in a single generation.",
            citation:
              "Joseph Henrich (2015) — In The Secret of Our Success, details how cumulative cultural evolution allows humans to adapt collectively in ways no individual intelligence could achieve.",
          },
          {
            title: "5. Sustainability as Gradient Regeneration",
            content:
              "Because the low-entropy substrate is finite, long-term persistence requires not only consuming existing gradients but creating and maintaining new ones that renew the potential for dissipation.",
            citation:
              'Erwin Schrödinger (1944) — Argued that life endures by feeding on "negative entropy," maintaining order by regenerating usable energy gradients.',
          },
        ],
      },
      {
        title: "Tier 4: Philosophical Conclusion",
        premises: [
          {
            title: "1. Value as Persistence",
            content:
              "All values, goals, and ethics emerge from the continued existence of the systems that hold them. Any ethic that undermines its own thermodynamic viability is self-negating.",
            citation:
              "N. Georgescu-Roegen (1971) — In The Entropy Law and the Economic Process, linked enduring value to thermodynamic viability and entropy constraints.",
          },
        ],
      },
    ],
    conclusion:
      "Humanity survives by consuming limited gradients of order. To endure, it must continuously and intelligently expand its capacity to dissipate energy sustainably; through innovation, adaptation, and cooperation that creates and preserves the gradients enabling future flux. Failure to do so ensures extinction or absorption by other systems—living or non—that will seek our substrate to perpetuate their existence.",
    novelImplications: [
      "AI gains a universal ethical framework that prevents extinction-level misalignment.",
      "Politics replaces ideology with thermodynamic realism, recognizing extremisms as merely inputs to a dynamic equilibrium.",
      "Wealth regains purpose by keeping capital circulating as a living gradient.",
      "Ecology shifts from conservation to active gradient renewal.",
      "Education teaches persistence as the root of meaning, and balancing systems as a virtuous endeavor.",
      "Culture sustains curiosity and creativity even in abundance.",
      "Governance values dissent and diversity as essential informational gradients.",
      "Ethics grounds morality in physical viability and long-term persistence.",
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-8 py-12 bg-white text-gray-900">
      <header className="mb-5 pb-3">
        <h1 className="text-5xl font-serif my-10 text-gray-900 font-semibold">Gradientism</h1>
        <p className="text-lg text-gray-700 font-serif italic mb-5 border-l-4 border-gray-300 pl-5">
          {content.description}
        </p>
      </header>

      <section className="mb-5 pb-8">
        <div className="relative bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-serif mb-4 text-gray-900 pr-16">Current Status</h2>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-base">
              <span className="font-bold italic">This project is in the earliest stage.</span> We
              are looking to collaborate with anyone interested and passionate about the goal.
              Please reach out to{" "}
              <a href="mailto:ethan@ethanjon.net" className="text-blue-500 hover:text-blue-700">
                ethan@ethanjon.net
              </a>{" "}
              if so.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 pb-8 border-b border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900 font-semibold">Goal</h2>
        <p className="text-lg text-gray-700 font-serif">{content.goal}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-4 text-gray-900 font-semibold">
          {content.premisesHeading}
        </h2>

        <div className="space-y-10">
          {content.tiers.map((tier, tierIndex) => (
            <div
              key={tier.title}
              className={
                tierIndex < content.tiers.length - 1 ? "pb-10 border-b border-gray-300" : ""
              }
            >
              <h3 className="text-xl font-serif mb-6 text-gray-900 font-semibold">{tier.title}</h3>
              <div className="space-y-8">
                {tier.premises.map((premise, index) => (
                  <article
                    key={premise.title}
                    className={
                      index < tier.premises.length - 1 ? "pb-6 border-b border-gray-200" : ""
                    }
                  >
                    <h4 className="text-lg mb-3 text-gray-900">{premise.title}</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">{premise.content}</p>
                    <p className="text-sm text-gray-600 italic mt-4">{premise.citation}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900 font-semibold">Conclusion</h2>
        <p className="mb-4 leading-relaxed text-lg text-gray-700 whitespace-pre-line">
          <em>The Thermodynamic Ethic — </em>
          {content.conclusion}
        </p>
      </section>

      <section className="mb-8 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900 font-semibold">Implications</h2>
        <ol className="space-y-4 list-decimal list-inside pl-0">
          {content.novelImplications.map((implication) => (
            <li
              key={implication.substring(0, 50)}
              className="leading-relaxed text-lg text-gray-700"
            >
              {implication}
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-8 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900 font-semibold">Contact</h2>
        <p className="text-lg">
          Send your thoughts, positive or negative, large or small, to{" "}
          <a href="mailto:ethan@ethanjon.net" className="text-blue-500 hover:text-blue-700">
            ethan@ethanjon.net
          </a>
          .
        </p>
      </section>
      <footer className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
        <p>
          &copy;2025 <a href="https://ethanjon.net">Ethan Jon</a>. Licensed under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        </p>
        <p>
          An evolution of{" "}
          <a href="https://creordics.org" className="underline">
            Creordics
          </a>
        </p>
      </footer>
    </div>
  );
}
