# 🛡️ Plano de Redação Estratégica: Themis IP Shield (Edital Centelha III)

## 1. Análise de Risco de Divulgação (Audit Themis)
**Risco Identificado**: "Over-disclosure". Revelar detalhes exatos de como o algoritmo de consenso L1 funciona ou como a chave privada é gerada no ESP32 pode permitir engenharia reversa por avaliadores ou concorrentes que acessem o banco de projetos.

## 2. Estratégia "Caixa Preta Funcional"
Para o edital, devemos focar no **"O QUÊ"** (Funcionalidade) e no **"PORQUÊ"** (Impacto), e ofuscar o **"COMO"** (Segredo Industrial).

### ✅ O que MOSTRAR (Green Light):
- **Arquitetura de Alto Nível**: Diagramas de blocos (Sensor -> ESP32 -> Blockchain).
- **Specs de Hardware**: Chipsets utilizados (ESP32-S3, ATECC608A), protocolos (MQTT, CAN Bus).
- **Resultados de Living Lab**: Gráficos de performance, redução de fraude, economia gerada.
- **Conceito de Identidade Híbrida**: A ideia de vincular motorista e veículo.

### 🚫 O que REDIGIR/OFUSCAR (Red Light):
- **Código Fonte do Core L1**: Nenhuma linha de C++ do firmware deve ir para o anexo.
- **Matemática Exata do BaaT**: Não revelar a fórmula final dos pesos $Reward = (...)$. Usar descrições genéricas como "Ponderação Multifatorial".
- **Topologia de Chaves**: Não detalhar como a rotação de chaves ECDSA é feita no Secure Element.

## 3. Ações de Mitigação no Texto
1.  **Substituir**: "Utilizamos o algoritmo X com parâmetros Y" -> "Utilizamos um algoritmo proprietário de consenso inercial (Patente Pendente)".
2.  **Enfatizar**: "A inovação está na integração..." (narrativa segura) vs "O segredo está na linha 40..." (risco).
3.  **Marca d'água**: Todos os documentos submetidos devem ter "CONFIDENCIAL - PROPRIEDADE INDUSTRIAL SH1W4" no rodapé.

## 4. Conclusão Themis
Seguindo este protocolo, a chance de perda de inovação é **NULA**. Pelo contrário, o sigilo estratégico *aumenta* a percepção de valor e maturidade do projeto ("Eles sabem o que têm nas mãos").

---
**Status**: ESTRATÉGIA ATIVA.
**Recomendação**: Atualizar o Modelo Técnico com estas diretrizes antes do envio.
