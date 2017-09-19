public static ClientResponse SendSimpleMessage() {
    Client client = Client.create();
    client.addFilter(new HTTPBasicAuthFilter("api", "key-d0572a9f503a1ec5536b60b37744971a"));
    WebResource webResource = client.resource("https://api.mailgun.net/v3/sandbox33018f1027144f5abfd2911927c83bb2.mailgun.org/messages");
    MultivaluedMapImpl formData = new MultivaluedMapImpl();
    formData.add("from", "Mailgun Sandbox <postmaster@sandbox33018f1027144f5abfd2911927c83bb2.mailgun.org>");
    formData.add("to", "Yesenia <y.elizabethcardenas@gmail.com>");
    formData.add("subject", "Hello Yesenia");
    formData.add("text", "Congratulations Yesenia, you just sent an email with Mailgun!  You are truly awesome!");
    return webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
                                        post(ClientResponse.class, formData);
}
// You can see a record of this email in your logs: https://mailgun.com/app/logs .

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10,000 emails/month for free.
