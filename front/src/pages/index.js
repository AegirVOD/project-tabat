import * as React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import ActivityBlock from "../components/activityBlock"
import bgImage from "../images/architect.jpg"

const activities = [
    {
        image: require('../images/gros_oeuvre.jpg').default,
        title: "Gros œuvre",
        description: "Ensemble des ouvrages assurant la stabilité et la résistance d'une construction."
    },
    {
        image: require('../images/sciage.jpg').default,
        title: "Sciage",
        description: "Découpe d'un bloc de divers matériaux suivant un plan, à l'aide d'une scie."
    },
    {
        image: require('../images/carottage.jpg').default,
        title: "Carottage",
        description: "Prélèvement d'un échantillon, généralement de forme cylindrique, dans un sol, un voile en béton, une chaussée, etc."
    },
    {
        image: require('../images/demolition.jpg').default,

        title: "Démolition",
        description: "Destruction d'un ouvrage ; peut être suivie d'une valorisation (recyclage) des matériaux en résultant."
    },
    {
        image: require('../images/curage.jpg').default,
        title: "Curage",
        description: "Les travaux de curage consistent à retirer les éléments de second oeuvre non porteurs d’un ou plusieurs bâtiments."
    },
]

const IndexPage = () => {
    return (
        <Layout location='index'>
          <Banner />
          <div className="space-y-4 flex flex-col items-center mt-4">
            <h2 className="text-3xl self-center">Nos Activités</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-start">
              {
                  activities.map((activity, index) => {
                      return  <ActivityBlock
                                             key={index}
                                             image={activity.image}
                                             title={activity.title}
                                             description={activity.description}
                               />
                  })
              }
            </div>
          </div>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
