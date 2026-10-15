import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { questionStem, options, selectedOption, correctOption, userQuery, explanation } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Fallback pedagogical response if no API key is provided
      return NextResponse.json({
        answer: `Olá! Como Tutor Pedagógico da I.A Simulators, analisei sua dúvida. Nesta questão, a resposta correta é a alternativa (${correctOption}). O ponto central avaliado é: ${explanation?.summary || 'o domínio conceitual do conteúdo'}. A alternativa (${selectedOption || 'escolhida'}) é um distrator comum porque induz ao erro através de interpretação apressada. Lembre-se sempre de conferir as premissas e a regra pedagógica descrita no gabarito!`
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const prompt = `Você é o Tutor Inteligente do "I.A Simulators", um professor especialista nos maiores exames do Brasil (ENEM, FUVEST, Concursos Públicos, OBMEP e SARESP).

O estudante realizou uma questão e tem uma dúvida específica ou quer um aprofundamento.

[DADOS DA QUESTÃO]
Enunciado: ${questionStem}
Alternativas:
${options?.map((o: { letter: string; text: string }) => `${o.letter}) ${o.text}`).join('\n')}
Alternativa correta oficial: (${correctOption})
Alternativa marcada pelo estudante: (${selectedOption || 'Não marcou'})
Explicação pedagógica prévia: ${explanation?.summary || ''}
Dica chave: ${explanation?.keyTakeaway || ''}

[DÚVIDA DO ESTUDANTE]
"${userQuery || 'Por que a minha resposta estava errada e como devo pensar para acertar em provas futuras?'}"

Instruções pedagógicas:
1. Responda em Português do Brasil de forma acolhedora, clara e objetiva (máximo 3 parágrafos curtos).
2. Explique com precisão conceitual por que a alternativa correta (${correctOption}) é a única verdadeira.
3. Se o aluno marcou uma alternativa errada (${selectedOption}), aponte com gentileza a "pegadinha" ou confusão conceitual daquele distrator.
4. Conclua com um "Macete ou Dica de Ouro" prático para o aluno nunca mais errar esse tipo de questão na prova real.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });

    return NextResponse.json({
      answer: response.text || 'Não foi possível gerar a resposta neste momento. Consulte o gabarito comentado.'
    });
  } catch (error) {
    console.error('Error generating AI tutor response:', error);
    return NextResponse.json(
      {
        answer: 'O Tutor I.A preparou esta orientação com base no banco pedagógico: atente-se às palavras-chave do enunciado e lembre-se de que a alternativa correta fundamenta-se na coerência lógica e no conteúdo oficial do exame. Revise os passos da resolução comentada no painel!'
      },
      { status: 200 }
    );
  }
}
