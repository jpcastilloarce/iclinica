import { ScrollView, Text } from "react-native";
import { Screen } from "../../components/Screen";
import Title from "../../components/Title";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Title text="Sobre el proyecto" subtext="iclinicA" />
        <Text className="text-black text-black/90 mb-4">
          Esta aplicación ha sido desarrollada con el objetivo de participar en
          la Hackathon 2024 de Midudev, por lo que su uso se limita a fines
          educativos. La aplicación está diseñada como una clínica operada por
          inteligencia artificial, inicialmente centrada en la especialidad de
          medicina familiar, debido a que esta es la especialidad más frecuente
          en áreas rurales. La motivación principal para la creación de esta
          aplicación fue proporcionar un recurso para personas con acceso
          limitado a servicios médicos, ofreciendo recomendaciones médicas
          primarias basadas en los datos ingresados por los usuarios.
        </Text>
        <Text className="text-black text-black/90 mb-4">
          La elección de la especialidad de Medicina Familiar se debe a que los
          médicos de esta área están capacitados para ofrecer atención integral
          a pacientes de todas las edades y tratar una amplia gama de
          afecciones. Esta capacidad es especialmente valiosa en zonas con
          recursos médicos limitados, donde se necesita un enfoque amplio y
          adaptable a diversas necesidades de salud.
        </Text>
        <Text className="text-black text-black/90 mb-4">
          Adicionalmente, los médicos de familia suelen contar con habilidades
          en áreas relacionadas como la obstetricia, la pediatría y la
          geriatría. Estas competencias les permiten atender a una población
          diversa, brindando una atención médica adecuada a una variedad de
          necesidades y situaciones de salud, lo cual resulta fundamental en
          contextos con recursos médicos limitados.
        </Text>
        <Text className="text-black text-black/90 mb-4">
          Backend: Next.js + Vercel SDK AI
        </Text>
        <Text className="text-black text-black/90 mb-4">
          Frontend: React-native + Expo + TailwindCSS
        </Text>
      </ScrollView>
    </Screen>
  );
}
