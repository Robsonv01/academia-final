# 🏋️ FORCE GYM – Site da Academia (Projeto Escolar: Site Real, SEO e Análise de Resultados)

Site completo de uma academia fictícia ("FORCE GYM") inspirado no visual moderno das academias estilo **LT2FIT**
(escuro com detalhes vermelhos), criado para a atividade **"Criação de um Site Real, SEO e Análise de Resultados"**.

> ⚠️ **Importante:** a academia é um **projeto de estudo**. Nome, telefone, endereço e redes sociais são **fictícios**.
> Antes de publicar de verdade, troque pelos dados reais do negócio.

---

## 👨‍🎓 Identificação do trabalho

- **Aluno:** Robson Varela
- **Instituição:** IST Mecatrônica SENAI – Caxias do Sul
- **Área:** Tecnologia e Mecatrônica
- **Curso:** Técnico em Desenvolvimento de Sistemas

---

## 📁 Estrutura do Projeto

```
academia-forcegym/
├── index.html        → Página inicial (hero, serviços, estrutura, planos, depoimentos)
├── sobre.html        → História, missão, valores e equipe
├── planos.html       → Planos e tabela comparativa
├── aulas.html        → Modalidades e grade de horários
├── contato.html      → Formulário (envia para o WhatsApp) + informações de contato
├── assets/
│   ├── css/
│   │   └── style.css → Estilos do site (paleta preto + vermelho, responsivo)
│   ├── js/
│   │   └── main.js   → Menu mobile, animações, contadores, formulário→WhatsApp
│   └── img/          → 9 imagens geradas por IA (hero, musculação, recepção,
│                        cardio, aulas, funcional, personal, equipe, logo)
└── README.md         → Este guia + documentação da atividade
```

## ▶️ Como abrir no VS Code

1. **Extraia o ZIP** em uma pasta do seu computador.
2. Abra o **VS Code** → menu **Arquivo → Abrir Pasta…** → selecione a pasta `academia-forcegym`.
3. Instale a extensão **Live Server** (id: `ritwickdey.LiveServer`).
4. Clique com o botão direito em `index.html` → **"Open with Live Server"**.
5. O site abre no navegador em `http://127.0.0.1:5500` — e toda alteração recarrega sozinha.

> Dica: para testar no celular, abra o endereço que o Live Server mostra (ex.: `http://192.168.x.x:5500`) no navegador do celular na mesma rede Wi-Fi.

---

## 🎯 O que o site entrega (mapeado para a atividade)

| Requisito da atividade | Onde está no site |
|---|---|
| Nome do negócio | FORCE GYM (logo + rodapé) |
| Descrição clara | Hero, seção "Sobre", missão/visão |
| Produtos/serviços | Seção Serviços + página Aulas |
| Imagens | 9 imagens reais (geradas), com texto alternativo (alt) |
| WhatsApp | Botões "Aula Grátis", CTA, formulário e rodapé |
| Telefone | Página Contato + rodapé |
| Instagram / E-mail | Página Contato + rodapé |
| Endereço / região | Página Contato + mapa do Google |
| Chamada para ação | "Agendar aula experimental grátis" em todas as páginas |
| SEO (title, meta description, H1, H2, alt) | Todas as páginas + `<head>` |
| SEO local | JSON-LD (HealthClub) + palavras-chave locais + mapa |
| Site responsivo | CSS com media queries + menu mobile |
| Velocidade | Imagens otimizadas (comprimidas) |

---

## 🔍 1. Pesquisa sobre o negócio

1. **Nome:** FORCE GYM Academia.
2. **Serviços:** musculação, aulas coletivas (spinning, jump, funcional, cross, alongamento, GAP), personal trainer, avaliação física e orientação nutricional.
3. **Problema que resolve:** falta de acesso a uma academia com atendimento próximo, horários flexíveis e preço justo em Caxias do Sul.
4. **Possíveis clientes:** moradores da região central de Caxias do Sul e bairros próximos.
5. **Público-alvo:** jovens e adultos de 18 a 55 anos, iniciantes e avançados, que buscam saúde, estética e condicionamento.
6. **Cidade/região:** Caxias do Sul/RS (Av. Sinimbu, 1234 – Centro).
7. **Como os clientes contatam:** WhatsApp (principal), telefone, Instagram, e-mail e presencialmente.
8. **Objetivo do site:** gerar **contatos pelo WhatsApp** (aula experimental e assinatura de planos).

## 🎯 2. Pesquisa sobre o público-alvo

- **Faixa etária:** 18–55 anos.
- **Região:** Centro de Caxias do Sul e até 15 minutos de distância.
- **Necessidades:** emagrecer, ganhar massa muscular, melhorar condicionamento, aliviar estresse, rotina saudável.
- **Como buscam na internet:** pesquisas locais no Google.

**Palavras-chave que um cliente pesquisaria:**
- academia em Caxias do Sul
- musculação Caxias do Sul
- academia perto de mim
- aula experimental academia
- preço mensalidade academia
- personal trainer Caxias do Sul
- aulas coletivas / spinning / jump academia

## 🏢 3. Pesquisa de concorrentes (exemplo de análise)

| Concorrente | Aparece no Google? | Site próprio? | Instagram? | WhatsApp? | Telefone? | Endereço? | Fotos? |
|---|---|---|---|---|---|---|---|
| LT2FIT (lt2fit.com.br) | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| Academia Bluefit (rede) | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| Smart Fit (rede) | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| Academias locais de bairro | Algumas | Poucos | Sim | Sim | Parcial | Parcial | Poucas |

**O que os líderes fazem bem:** SEO local forte (Google Meu Negócio), fotos reais da estrutura, preço visível na home,
botão de WhatsApp em destaque, site responsivo e rápido.
**O que pode ser melhorado:** posts com depoimentos, grade de horários clara e atendimento humanizado.

## 📈 4. Pesquisa sobre SEO

- **SEO (Search Engine Optimization)** = otimização para mecanismos de busca.
- **Palavras-chave:** termos que o cliente digita no Google (ex.: "academia em Caxias do Sul").
- **Title:** título da aba do navegador — o mais importante da página (ex.: *Academia FORCE GYM em Caxias do Sul – Musculação e Aulas Coletivas*).
- **Meta description:** resumo exibido nos resultados do Google (até ~155 caracteres).
- **H1:** título principal da página (somente um por página).
- **H2/H3:** subtítulos que organizam o conteúdo.
- **URL amigável:** endereços curtos e com palavras (ex.: `/planos`, `/aulas`).
- **SEO local:** Google Meu Perfil, palavras-chave com a cidade, endereço e mapa no site.
- **Site responsivo:** adapta-se ao celular (o Google prioriza versão mobile).
- **Velocidade:** imagens comprimidas e código leve.
- **Conteúdo relevante:** textos que respondem às dúvidas do cliente.
- **Alt nas imagens:** descrição das fotos para acessibilidade e indexação.

**O que foi aplicado neste site:**
- `<title>` e `meta description` únicas em cada página ✅
- Palavras-chave locais no conteúdo e metadados ✅
- Um único `<h1>` por página + H2/H3 organizados ✅
- Atributo `alt` descritivo em todas as imagens ✅
- URLs amigáveis e página `canonical` ✅
- Dados estruturados JSON-LD (schema `HealthClub`) ✅
- Open Graph para compartilhamento bonito no WhatsApp/Instagram ✅
- Imagens comprimidas (92–162 KB) para carregar rápido ✅

## 📊 5. Métricas (como analisar resultados)

**Ferramentas sugeridas:** Google Analytics 4, Google Search Console, Google Tag Manager, Bitly (links encurtados) e o clique manual no botão do WhatsApp.

**Métricas a acompanhar (crie uma tabela como no PDF):**

| Métrica | Resultado esperado |
|---|---|
| Número de visitantes | Definir meta (ex.: 100/mês) |
| Cliques no WhatsApp | Meta: 10/mês |
| Cliques no Instagram | Meta: 20/mês |
| Mensagens recebidas | Anotar semanalmente |
| Pedidos de orçamento | Anotar semanalmente |

**Perguntas de análise:** De onde vieram os acessos? Celular ou computador? Qual botão foi mais clicado?
Quantas pessoas entraram em contato? O objetivo do site foi alcançado?

## 📣 6. Divulgação (estratégias sugeridas)

- Compartilhar o link no WhatsApp e em grupos da família/amigos.
- Postar o link no Instagram (bio + stories + post de lançamento).
- Pedir para alunos e amigos compartilharem.
- Criar o perfil da academia no **Google Meu Negócio** para aparecer no mapa.
- Cadastrar o site no **Google Search Console** e enviar o sitemap.
- Imprimir o endereço do site em panfletos e cartões de visita.

## 🧠 7. Uso de Inteligência Artificial

A IA foi usada como **ferramenta de apoio** (conforme permitido pela atividade): geração das imagens,
sugestões de textos e estrutura, e explicações dos códigos. O aluno deve **compreender** cada parte:
menu, responsividade, formulário → WhatsApp, SEO, contadores e animações.

---

## 🛠️ Personalização (troque os dados fictícios pelos reais)

- **WhatsApp/Telefone:** em todos os arquivos, troque `5554999990000` e `(54) 99999-0000` pelo número real
  (formato: código do país + DDD + número, sem espaços).
- **Instagram:** `https://instagram.com/forcegym` → perfil real.
- **Endereço e mapa:** atualize o endereço no rodapé e o `q=` do iframe do Google Maps
  (ex.: `https://www.google.com/maps?q=SEU+ENDEREÇO&output=embed`).
- **Cores:** edite as variáveis `--red` e `--red-2` no topo do `assets/css/style.css`.

Bons treinos! 💪
