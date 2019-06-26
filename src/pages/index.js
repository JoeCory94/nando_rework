import React from "react"
import Layout from "../components/layout";
import Nav from '../components/nav';
import BlockText from '../components/blocks/text'
import BlockImage from '../components/blocks/image'

//import images
import MrPImage from '../images/03_Mr_President.jpg';

const IndexPage = () => (
  <Layout>
    <div class="page">
      <Nav />
      <div class="index-wrapper" id="home">
        <section>
          <BlockText blockWidth={"col-span-12"} blockPosition={"blockCenter"}>
            <h1><strong>We’re the go-to creative development partner for ambitious brands and fearless agencies.</strong></h1>
          </BlockText>
        </section>
        <section>
          <BlockImage blockWidth={"col-span-12"} imageAlignment={"left"} imageSrc={MrPImage} imageTitle="Image title" imageDescription="Description" imageLink="/">
          </BlockImage>
          <BlockImage blockWidth={"col-span-12"} imageAlignment={"right"} imageSrc={MrPImage} imageTitle="Image title" imageDescription="Description" imageLink="/">
          </BlockImage>
          <BlockImage blockWidth={"col-span-12"} imageAlignment={"left"} imageSrc={MrPImage} imageTitle="Image title" imageDescription="Description" imageLink="/">
          </BlockImage>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
