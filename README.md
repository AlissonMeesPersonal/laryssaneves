# Laryssa Neves — Estética & Formação

Landing page institucional e comercial para Laryssa Neves, com dois objetivos:
1. Apresentar serviços de estética do olhar e encaminhar solicitações de atendimento ao WhatsApp.
2. Apresentar os cursos para futuras Lash Designers e captar interesse em novas turmas.

**Contato:** [Instagram](https://www.instagram.com/laryssaneves.estetica/) · [WhatsApp](https://wa.me/5551995033979)

## Identidade visual Rosé Doré (v2)

O redesign segue a referência fornecida da marca Laryssa Neves: rosa blush/rosé nude, dourado e café espresso. O hero é HTML/CSS real (não é uma imagem de mockup). Menus, links e CTAs são clicáveis. A nova folha `premium.css` substitui visualmente a primeira proposta sem destruir o CSS-base. Layout responsivo com CSS breakpoints para desktop/tablet/mobile.

As imagens do hero e dos cards são **ilustrativas**, não fotografias da Laryssa nem de trabalhos realizados por ela. A marca LN desenhada em CSS é provisória; preferir arquivo vetorial original quando fornecido. Sem avaliações, estatísticas ou qualificações inventadas.

**Deploy:** o GitHub `main` está vinculado ao projeto Vercel `laryssaneves` (e há um segundo projeto `laryssaneves-1rk9` conectado ao mesmo repositório). Evite manter dois projetos se não houver necessidade.

## Estrutura do projeto

- `index.html` — conteúdo, SEO, componentes e seções.
- `styles.css` — identidade visual, espaçamentos, animações sutis e breakpoints responsivos.
- `script.js` — menu mobile, links com mensagens específicas de WhatsApp, formulário e ano do rodapé.
- `favicon.svg` — monograma provisório LN.
- `robots.txt` — instrução de indexação.

É um site estático com HTML, CSS e JavaScript puro. **Não utiliza banco de dados, não cobra assinatura de framework e não salva dados do formulário**. O formulário abre o WhatsApp da profissional com mensagem preenchida, sem registrar agendamento ou matrícula automaticamente.

## Rodar localmente

No VS Code, abra a pasta do repositório e utilize a extensão **Live Server** no `index.html`; alternativamente, use Python instalado:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Publicar na Vercel

1. Importar o repositório `AlissonMeesPersonal/laryssaneves`.
2. Framework Preset: **Other**. Root Directory: **/**.
3. Não é necessário comando de build, nem variáveis de ambiente.
4. Concluir a publicação e conectar domínio personalizado quando estiver disponível.

## Fotos e direitos

Imagens da versão inicial são **fotografias ilustrativas de terceiros**, hospedadas no Pexels (não são retratos de Laryssa e **não devem ser apresentadas como trabalhos realizados por ela**).

Referências dos IDs Pexels: `34930118`, `5128233`, `5128234`, `33723106`, `29877726`, `7755531`. Licença: https://www.pexels.com/license/

**Antes do lançamento final:** preferencialmente substituir fotos por imagens próprias autorizadas (profissional, espaço, atendimentos, resultados e cursos). As imagens atualmente dependem do carregamento remoto do Pexels.

## Validações necessárias antes da publicação final

- Substituir fotos ilustrativas por fotos oficiais e aprovar o uso de imagem de clientes.
- Confirmar lista real de procedimentos, técnicas e condições de manutenção.
- Confirmar conteúdo de cada curso, modalidade, duração, certificado, materiais, investimento e próximas turmas.
- Confirmar endereço comercial antes de exibir endereço completo e mapa.
- Revisar biografia e qualificações da Laryssa com base em documentos fornecidos.
- Substituir logotipo provisório por marca oficial, se houver.
- Confirmar domínio para cadastrar site em Google Search Console e definir `canonical` e `og:image`.
- Confirmar política de privacidade caso sejam adicionados analytics, formulários persistentes, pixels ou cookies.

Evite incluir avaliações, contagens de alunas e qualificações que não foram verificadas.

## Customizações rápidas

- Paleta e tipografia: primeiras linhas do arquivo `styles.css` (variáveis CSS `:root`).
- WhatsApp: constante `WHATSAPP_NUMBER` em `script.js` e URLs `href` de fallback em `index.html`.
- Mensagens específicas: atributo `data-whatsapp` em cada link no `index.html`.
- Imagens: altere as URLs nos atributos `src` das tags `<img>`.
- Textos e seções: arquivo `index.html`.

## Checklist de qualidade

- Navegação por teclado e link para conteúdo.
- Menu mobile com `aria-expanded` e fechamento ao pressionar Escape.
- Responsividade em desktop, tablet e celular.
- `alt` descritivo nas imagens e carregamento lazy nas imagens secundárias.
- Respeito a `prefers-reduced-motion`.
- SEO básico com metadados e dados estruturados de negócio local.

**Observação:** imagens externas e fontes Google precisam de conexão à Internet.
