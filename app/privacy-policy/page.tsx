import Head from 'next/head'
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* <Header /> */}
      <Head>
        <title>隐私政策</title>
        <meta name="description" content="我们的隐私政策" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">隐私政策</h1>
        <p className="mt-4 text-lg text-gray-500">
          最后更新：[2024-07-28]
        </p>

        <div className="mt-6 prose prose-lg text-gray-500">
          <p>
            感谢您选择成为成都养路工数字科技有限公司（以下简称“公司”、“我们”、“我们的”）社区的一部分。我们致力于保护您的个人信息和您的隐私权。如果您对我们的政策或我们处理您个人信息的做法有任何疑问或担忧，请通过[联系信息]与我们联系。
          </p>
          <p>
            当您访问我们的网站并使用我们的服务时，您将信任我们处理您的个人信息。我们非常重视您的隐私。在本隐私政策中，我们力求以最清晰的方式向您解释我们收集哪些信息、如何使用这些信息以及您在这些信息方面的权利。我们希望您花时间仔细阅读，因为这很重要。如果您不同意本隐私政策中的任何条款，请停止使用我们的网站和服务。
          </p>
          <p>
            本隐私政策适用于通过我们的网站收集的所有信息，以及您与我们互动时收集的信息。本政策不适用于我们不拥有或控制的公司的做法，也不适用于我们不雇用或管理的个人。
          </p>
          <p>
            请您仔细阅读本隐私政策，以了解我们对您的个人信息和数据的政策和做法，以及我们将如何处理这些信息。如果您不同意我们的政策和做法，请不要使用我们的服务。
          </p>
        </div>
      </div>
    </div >
  )
}

export default PrivacyPolicy
