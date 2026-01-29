# ⚙️ Modelo Técnico Detalhado: Protocolo L1 Core (v4.4)

## 1. Arquitetura do Sistema e Cadeia de Custódia
O GuardDrive implementa uma arquitetura de validação em três camadas (L1/L3), garantindo a integridade do dado desde a origem física (sensor) até o registro imutável:
- **Camada de Captura (L1 - ESP32 Sovereign Node)**: O protocolo é agnóstico e otimizado para hardware de baixo custo (ESP32-S3). O dispositivo se conecta diretamente ao barramento **OBD-II**, capturando telemetria bruta (RPM, pressão de freio, carga do motor) e assinando os dados via ECDSA antes da transmissão.
- **Identidade Híbrida (V2D)**: Implementação de uma identidade criptográfica única que vincula o **VIN (Vehicle Identification Number)** à carteira digital do motorista, criando uma trilha de responsabilização inquebrável.
- **Transmissão via Selos Digitais (QR/IR)**: Além de V2X, o sistema gera "Selos de Rigor" visíveis via infravermelho (IR) ou QR Code, permitindo que agentes de trânsito e câmeras de malha urbana validem o status pericial do veículo sem necessidade de conexão ativa de rede.
- **Camada de Auditoria (L3 - SEVE)**: Sistema de explicabilidade que pondera variáveis...
- **Camada de Registro (BaaT)**: Materialização de evidências em blocos de hash SHA-256 vinculados a assets econômicos.

## 2. Tokenização de Comportamento e Perfilamento OBD-II
O diferencial econômico reside no algoritmo de **Identificação de Perfil de Condução**. Ao cruzar dados inerciais com telemetria OBD-II, o protocolo detecta padrões sutis de direção (acelerações bruscas, fadiga mecânica, economia de combustível técnica).
- O sistema converte esse rigor em **Tokens GST (Governance & Safety Tokens)**.
- **Identidade Híbrida**: O token emitido é assinado pelo par [VEÍCULO+MOTORISTA], garantindo que o mérito econômico seja atribuído corretamente.
- **Equação de Reward**: $Reward = (S_w \cdot 0.6) + (F_p \cdot 0.3) + (P_s \cdot 0.1)$.

## 3. Validação em Ambiente Simulado (TRL 4/5)
O sistema foi validado no **Salvador Living Lab**, utilizando um *Digital Twin* de alta fidelidade (Ambiente Simulado).
- **Cenário**: Simulação de 50 veículos em malha urbana complexa.
- **Performance**: Latência de validação < 500ms; Taxa de detecção de fraude inercial de 93%.
- **Resiliência**: Suporte a protocolos V2X com imunidade a jammers detectada em tempo de execução.

## 4. Plano de Maturidade Tecnológica (Roadmap para TRL 7/8)
- **TRL 7 (ready)**: Integração com hardware automotivo OEM (Montadoras).
- **TRL 8**: Deploy em frota operacional de segurança pública sob regime de sandbox regulatório.

---
**Auditoria Técnica Themis**: Conformidade com normas periciais brasileiras (Cadeia de Custódia - Lei 13.964/19).
**Diferencial EditalShield**: Único projeto a unir perícia em hardware com economia de tokens comportamentais.
