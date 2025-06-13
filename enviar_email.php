<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pegando os dados do formulário
    $nome = strip_tags(trim($_POST["nome"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensagem = trim($_POST["mensagem"]);

    // Validação simples
    if (empty($nome) || empty($mensagem) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Se algum campo estiver vazio ou o e-mail for inválido, retorna um erro.
        http_response_code(400);
        echo "Por favor, preencha todos os campos e tente novamente.";
        exit;
    }

    // <<<=== IMPORTANTE: Configure o e-mail de destino aqui ===>>>
    $recipient = "pvldo007@gmail.com";

    // Assunto do e-mail
    $subject = "Nova mensagem de contato de $nome";

    // Conteúdo do e-mail
    $email_content = "Nome: $nome\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensagem:\n$mensagem\n";

    // Cabeçalhos do e-mail
    $headers = "From: $nome <$email>";

    // Enviando o e-mail
    if (mail($recipient, $subject, $email_content, $headers)) {
        // Se o e-mail foi enviado com sucesso.
        http_response_code(200);
        echo "Obrigado! Sua mensagem foi enviada com sucesso.";
    } else {
        // Se houve uma falha ao enviar.
        http_response_code(500);
        echo "Ocorreu um problema e não foi possível enviar sua mensagem.";
    }

} else {
    // Se o acesso ao script não for via POST.
    http_response_code(403);
    echo "Houve um problema com o seu envio, por favor, tente novamente.";
}
?>