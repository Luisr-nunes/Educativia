<div align="center">

<img width="200" src="src/assets/17b4396c33897842498e8c05d06dfdaf98d045b4.png" alt="Logo Educativia"/>

# Educativia

[Read in English](README.en.md)

Copiloto pedagógico que usa inteligência artificial para criar, adaptar e organizar planos de aula alinhados à BNCC, devolvendo tempo ao professor.

[Protótipo navegável no Figma](https://aged-sleek-15809251.figma.site)

</div>

## Sobre

Projeto acadêmico do Squad 15 na Cesar School, ligado ao ODS 4 da ONU (Educação de Qualidade). O alvo é a sobrecarga docente na educação básica: para cada 50 minutos de aula, o professor pode gastar até 3 horas de preparo, além de adaptar o conteúdo para turmas heterogêneas.

O repositório contém o front-end do protótipo, exportado do Figma Make em React e TypeScript. As telas usam dados simulados; não há back-end nem integração real com IA.

## Proposta

| Funcionalidade | Descrição |
| --- | --- |
| Planejamento com IA | Gera planos de aula em minutos, com metodologias ativas |
| Adaptação de conteúdo | Ajusta materiais para diferentes níveis e necessidades |
| Gestão de horários | Organiza calendário e grade de aulas |
| Comunidade | Troca de práticas entre professores |

## Processo de design

Desenvolvido com Design Thinking (Double Diamond) e Lean UX:

- **Imersão:** matriz CSD e benchmark com Profy, Eduaide e Plurall. Diferencial identificado: foco explícito na BNCC e banco integrado de metodologias ativas.
- **Personas:** Carlos Menezes, professor de 42 anos da rede pública, com poucos recursos e turmas heterogêneas; Marta Oliveira, coordenadora de 56 anos que quer padronizar os planos sem perder qualidade.
- **Lean Canvas:** planos de aula completos em minutos, com um sistema que melhora com o uso da comunidade.
- **Referências:** Viegas (2022) e Moriconi et al. (2021) sobre a intensificação do trabalho docente.

## Telas

| Tela | Componente | Descrição |
| --- | --- | --- |
| Início | `HomeScreen` | Visão geral e atalho para novo planejamento |
| Canvas | `CanvasEditor` | Editor do plano de aula em blocos |
| Copiloto | `AIBottomSheet` | Sugestões de IA para o bloco selecionado |
| Biblioteca | `LibraryScreen` | Metodologias e planos salvos |
| Horários | `ScheduleManager` | Grade de aulas |
| Comunidade | `CommunityFeed` | Troca de experiências entre docentes |
| Perfil | `ProfileScreen` | Dados e configurações do professor |

## Tecnologias

- React 18, TypeScript e Vite 6
- shadcn/ui sobre Radix UI, Lucide, Recharts
- CSS gerado pelo Tailwind CSS 4
- Figma e Figma Make (prototipação e exportação)

## Como executar

Pré-requisito: Node.js 18+.

```bash
git clone https://github.com/Luisr-nunes/Educativia.git
cd Educativia
npm install
npm run dev      # http://localhost:3000
```

## Squad 15

Luís Nunes, Raysa Queiroz, Cauã Rego, João Pedro Cavalcanti, Pedro Feitosa, Micaella Cabral, Rodrigo Montenegro, João Bonifácio, Luis Vilas e Lucas Valença.

## Créditos

Componentes de [shadcn/ui](https://ui.shadcn.com/) (MIT) e fotos do [Unsplash](https://unsplash.com/license); ver [Attributions.md](Attributions.md).

## Projeto relacionado

[CanvasAgil](https://github.com/Luisr-nunes/CanvasAgil) guarda a mesma exportação do Figma Make como base reutilizável.
