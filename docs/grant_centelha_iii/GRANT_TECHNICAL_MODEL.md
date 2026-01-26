# ⚙️ Modelo Técnico Detalhado: Protocolo L1 Core (v4.4)

## 1. Arquitetura do Sistema e Cadeia de Custódia
O GuardDrive implementa uma arquitetura de validação em três camadas (L1/L3), garantindo a integridade do dado desde a origem física (sensor) até o registro imutável:
- **Camada de Captura (L1 - HSM)**: Utilização de *Secure Elements* (STM32/ESP32-S3 com HSM) para assinatura ECDSA nativa. O dado é blindado contra ataques de *Man-in-the-Middle* antes mesmo de sair do barramento CAN do veículo.
- **Camada de Auditoria (L3 - SEVE)**: Sistema de explicabilidade que pondera variáveis éticas e riscos operacionais (privacidade vs. segurança) em milissegundos.
- **Camada de Registro (BaaT)**: Materialização de evidências em blocos de hash SHA-256 vinculados a assets econômicos.

## 2. Tokenização de Comportamento (Behaviour-as-a-Token)
O diferencial econômico reside no algoritmo de **Assetização de Rigor**. O protocolo calcula um "Score de Conformidade Forense" em tempo real. Se o rigor for mantido (ausência de eventos de risco e integridade de sinal), o sistema emite **Tokens GST (Governance & Safety Tokens)**.
- **Equação de Reward**: $Reward = (S_w \cdot 0.6) + (F_p \cdot 0.3) + (P_s \cdot 0.1)$, onde $S$ é segurança, $F$ é perícia e $P$ é privacidade.

## 3. Validação em Ambiente Relevante (TRL 6)
O sistema foi validado no **Salvador Living Lab**, utilizando um *Digital Twin* de alta fidelidade.
- **Cenário**: Simulação de 50 veículos em malha urbana complexa.
- **Performance**: Latência de validação < 500ms; Taxa de detecção de fraude inercial de 93%.
- **Resiliência**: Suporte a protocolos V2X com imunidade a jammers detectada em tempo de execução.

## 4. Plano de Maturidade Tecnológica (Roadmap para TRL 7/8)
- **TRL 7 (ready)**: Integração com hardware automotivo OEM (Montadoras).
- **TRL 8**: Deploy em frota operacional de segurança pública sob regime de sandbox regulatório.

---
**Auditoria Técnica Themis**: Conformidade com normas periciais brasileiras (Cadeia de Custódia - Lei 13.964/19).
**Diferencial EditalShield**: Único projeto a unir perícia em hardware com economia de tokens comportamentais.
