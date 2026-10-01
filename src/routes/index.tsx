import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import heroImg from "@/assets/hero.jpg";
import stationeryImg from "@/assets/stationery.jpg";
import brideImg from "@/assets/bride.jpg";
import glassesImg from "@/assets/glasses.jpg";

const CHECKOUT = "https://pay.kiwify.com.br/oLx1YAH";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Código do Casamento / Caroline Frey" },
      {
        name: "description",
        content:
          "Aprenda a organizar um casamento elegante e sofisticado com até 50k. Encontro on-line ao vivo em 22/10/26, às 20h. Vagas limitadas por R$ 47,00.",
      },
      { property: "og:title", content: "Código do Casamento / Caroline Frey" },
      {
        property: "og:description",
        content:
          "Encontro on-line ao vivo com Caroline Frey em 22/10/26, às 20h. Organize seu casamento com elegância e até 50k.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT}
      className={`inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-center text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:bg-gold hover:text-ink sm:text-sm ${className}`}
    >
      {children}
    </a>
  );
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-3 sm:gap-6 justify-center mt-8 mb-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-lg bg-gold/10 border border-gold/30 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <span className="font-serif text-2xl sm:text-4xl text-gold">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="mt-3 text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] text-sand/90">
            {label === "days" ? "Dias" : label === "hours" ? "Horas" : label === "minutes" ? "Minutos" : "Segundos"}
          </span>
        </div>
      ))}
    </div>
  );
}

function Rule({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-10 bg-gold/50" />
      <span className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">{label}</span>
      <span className="h-px w-10 bg-gold/50" />
    </div>
  );
}

const pilares = [
  {
    n: "01",
    t: "Orçamento com estratégia",
    d: "Onde o dinheiro realmente vai e como distribuir cada real sem abrir mão do que importa para você.",
  },
  {
    n: "02",
    t: "A noiva no comando",
    d: "Você à frente das decisões, com clareza para negociar, comparar e dizer não sem culpa.",
  },
  {
    n: "03",
    t: "Estética sem exagero",
    d: "Escolhas visuais que criam sofisticação de verdade — e aquelas que só encarecem a conta.",
  },
  {
    n: "04",
    t: "Economia inteligente",
    d: "Dicas práticas de negociação, prioridades e substituições que preservam a elegância do dia.",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <header className="relative min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Mesa de casamento posta com louça off-white, talheres dourados e flores brancas"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="font-serif text-sm italic tracking-wide text-sand">Caroline Frey apresenta</p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-cream sm:text-6xl lg:text-7xl">
            O Código do
            <br />
            Casamento <span className="text-gold">50k</span>
          </h1>
          <span className="mt-8 h-px w-24 bg-gold/60" />
          <p className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-cream/90 sm:text-2xl">
            “Eu vou te ensinar a organizar seu casamento de forma elegante e sofisticada com
            até 50k!”
          </p>
          <CountdownTimer targetDate="2026-09-24T20:00:00-03:00" />
          <p className="mt-4 text-[0.7rem] uppercase tracking-[0.3em] text-sand sm:text-xs">
            24 · 09 · 26 &nbsp;—&nbsp; 20h &nbsp;—&nbsp; Ao vivo e on-line
          </p>
          <Cta className="mt-10 w-full max-w-md">Quero garantir minha vaga</Cta>
          <p className="mt-5 text-[0.7rem] uppercase tracking-[0.25em] text-gold">
            R$ 47,00 · Vagas limitadas!
          </p>
        </div>
      </header>

      {/* MANIFESTO */}
      <section className="border-y border-gold/20 bg-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Rule label="O convite" />
          <h2 className="mt-8 font-serif text-3xl leading-snug text-ink sm:text-4xl">
            Casamento sofisticado não é o mais caro. É o mais bem pensado.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A maior parte do que se gasta em um casamento não vira lembrança — vira excesso.
            Neste encontro ao vivo, você vai entender a lógica por trás de uma celebração
            elegante feita com orçamento definido, decisões conscientes e um olhar apurado
            para o que realmente aparece no seu grande dia.
          </p>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Rule label="O método" />
            <h2 className="mt-8 font-serif text-3xl text-ink sm:text-5xl">
              Quatro pilares do Código 50k
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-gold/25 sm:grid-cols-2">
            {pilares.map((p) => (
              <article key={p.n} className="bg-background p-8 sm:p-10">
                <span className="font-serif text-2xl text-gold">{p.n}</span>
                <h3 className="mt-4 font-serif text-2xl text-ink">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p.d}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <img
              src={stationeryImg}
              alt="Papelaria de casamento em papel artesanal com lacre dourado e fitas nude"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-72 w-full rounded-sm object-cover sm:h-96"
            />
            <img
              src={glassesImg}
              alt="Taças de cristal empilhadas sob luz dourada"
              loading="lazy"
              width={1408}
              height={912}
              className="h-72 w-full rounded-sm object-cover sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-nude px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <img
            src={brideImg}
            alt="Noiva em vestido de seda segurando buquê de flores brancas"
            loading="lazy"
            width={1200}
            height={1504}
            className="h-[26rem] w-full rounded-sm object-cover sm:h-[34rem]"
          />
          <div>
            <Rule label="Sobre" />
            <h2 className="mt-8 font-serif text-4xl text-ink sm:text-5xl">Caroline Frey</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
              <p>
                Depois de organizar o próprio casamento, Caroline enxergou de perto algo que
                quase nenhuma noiva percebe a tempo: boa parte dos gastos não vem do sonho —
                vem da falta de estratégia.
              </p>
              <p>
                Ela decidiu tomar a frente de tudo. Assumiu as decisões, questionou cada
                orçamento, entendeu onde valia investir e onde estava apenas pagando caro.
                O resultado foi um casamento do jeito que sempre quis, com uma economia
                expressiva.
              </p>
              <p>
                Dessa experiência nasceu um método único, que coloca a noiva à frente da
                organização — com controle real sobre os gastos, clareza nas escolhas e dicas
                inteligentes de economia que preservam a elegância do começo ao fim.
              </p>
            </div>
            <a
              href="https://www.instagram.com/carolinefreymentora?igsi=M2RwdjB4Yndqanll"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-[0.7rem] uppercase tracking-[0.3em] text-gold underline-offset-8 hover:underline"
            >
              @carolinefreymentora
            </a>
          </div>
        </div>
      </section>

      {/* DETALHES */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Rule label="O encontro" />
          <h2 className="mt-8 font-serif text-3xl text-ink sm:text-5xl">Detalhes do evento</h2>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-sm bg-gold/25 sm:grid-cols-2">
            {[
              ["Data", "24 de setembro de 2026"],
              ["Horário", "20h00 (horário de Brasília)"],
              ["Formato", "Ao vivo e 100% on-line"],
              ["Investimento", "R$ 47,00"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background px-6 py-8">
                <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">{k}</dt>
                <dd className="mt-3 font-serif text-2xl text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <Cta className="mt-12 w-full max-w-md">Quero garantir minha vaga</Cta>
        </div>
      </section>

      {/* URGÊNCIA FINAL */}
      <section className="relative overflow-hidden bg-ink px-6 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gold">Vagas limitadas!</p>
          <h2 className="mt-8 font-serif text-3xl leading-snug text-cream sm:text-5xl">
            O seu casamento começa a mudar na noite de 24 de setembro.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
            São poucas vagas para o encontro ao vivo, por R$ 47,00. Depois que as inscrições
            fecharem, não haverá nova turma nesta data.
          </p>
          <Cta className="mt-10 w-full max-w-xl">
            Clique aqui e vamos iniciar a organização do seu sonho!
          </Cta>
          <CountdownTimer targetDate="2026-09-24T20:00:00-03:00" />
          <p className="mt-4 text-[0.7rem] uppercase tracking-[0.25em] text-sand">
            24 · 09 · 26 — 20h — Ao vivo e on-line
          </p>
        </div>
      </section>

      <footer className="bg-ink px-6 pb-12 text-center">
        <p className="font-serif text-lg text-cream/80">O Código do Casamento 50k</p>
        <p className="mt-2 text-xs text-cream/40">
          © {new Date().getFullYear()} Caroline Frey. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
