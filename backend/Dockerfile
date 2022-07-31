FROM openjdk:17

WORKDIR /cadastropessoas

COPY src /cadastro-pessoas/backend/src
COPY pom.xml /cadastro-pessoas/backend

COPY  target/cadastro-pessoas-0.0.1-SNAPSHOT.jar /cadastropessoas

CMD ["java", "-jar", "/cadastropessoas/cadastro-pessoas-0.0.1-SNAPSHOT.jar"]

EXPOSE 8080


