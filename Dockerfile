FROM openjdk:17-jdk-slim AS build

COPY pom.xml mvnw ./
COPY .mvn .mvn
RUN ./mvnw dependency:resolve

COPY src src
RUN ./mvnw package

FROM openjdk:17-jdk-slim
EXPOSE 8080
COPY --from=build target/*.jar quiz-app.jar
ENTRYPOINT ["java", "-jar", "quiz-app.jar"]