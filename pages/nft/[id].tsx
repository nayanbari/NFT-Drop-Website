import React, {useState, useEffect} from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { useAddress, useDisconnect, useMetamask, useNFTDrop, useContract } from "@thirdweb-dev/react";
import { sanityClient, urlFor } from '../../sanity';
import { Collection } from '../../typing';
import Link from 'next/link';
import { BigNumber } from 'ethers';
// import toast, { Toaster } from 'react-hot-toast';

interface Props{
    collection: Collection
}

const NFTDropPage = ({collection}: Props) => {

    const [claimedSupply, setClaimedSupply] = useState<number>(0)
    const [totalSupply, setTotalSupply] = useState<BigNumber>()
    const [priceInEth, setPriceInEth] = useState<string>()
    const [loading, setLoading] = useState<boolean>(true)
    // const nftDrop = useNFTDrop('0xc827fb54220eb2841A8c179Ce19C120B924919c3')
    const nftDrop = useContract(collection.address, "nft-drop").contract

    // Authentication
    const connectWithMetamask = useMetamask()
    const address = useAddress()
    const disconnect = useDisconnect()

    console.log(address, collection.address)

    useEffect(() => {
        if(!nftDrop) return

        const fetchPrice = async () => {
            const claimConditions = await nftDrop.claimConditions.getAll()
            setPriceInEth(claimConditions?.[0].currencyMetadata.displayValue)
        }

        fetchPrice()
    }, [nftDrop])

    useEffect(() => {
        if(!nftDrop) return;

        const fetchNFTDropData = async () => {
            setLoading(true)
            const claimed = await nftDrop.getAllClaimed()
            const total = await nftDrop.totalSupply()

            setClaimedSupply(claimed.length)
            setTotalSupply(total)
            
            setLoading(false)
        }

        fetchNFTDropData()
    }, [nftDrop])

    const mintNft = () => {
        if(!nftDrop || !address) return

        const quantity = 1

        setLoading(true)
        // const notification = toast.loading('Minting...', {
        //     style: {
        //         background: 'white',
        //         color: 'green',
        //         fontWeight: 'bolder',
        //         fontSize: '17px',
        //         padding: '20px'
        //     }
        // })

        const mint = async() => {

            const tx = await nftDrop.claimTo(address, quantity);
            const receipt = tx[0].receipt; // the transaction receipt
            const claimedTokenId = tx[0].id; // the id of the NFT claimed
            const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
            setLoading(false)
            console.log(receipt)
            console.log(claimedTokenId)
            console.log(claimedNFT)
        }
        mint()
    }

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        {/* <Toaster position="button-center" /> */}
        {/* Left */}
        <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
            <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
                <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
                    <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" src={urlFor(collection.previewImage).url()} alt="" />
                </div>
            <div className="space-y-2 p-5 text-center">
                <h1 className="text-4xl font-bold text-white">
                    {collection.nftCollectionName}
                </h1>
                <h2 className="text-xl text-gray-300">{collection.description}</h2>
            </div>
            </div>
        </div>
        {/* Right */}
        <div className="flex flex-1 flex-col p-12 lg:col-span-6">
            {/* Header */}
            <header className="flex items-center justify-between">
                <Link href={'/'}>
                <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">The{' '}
                <span className="font-extrabold underline decoration-pink-600/50">
                    Nayan
                </span>
                {' '}NFT Market Place</h1>
                </Link>
                <button onClick={() => address ? disconnect() : connectWithMetamask()} className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base">
                    {address ? 'Sign Out' : 'Sign In'}
                </button>
            </header>

    
            {/* Content */}
            <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
                <img src={urlFor(collection.mainImage).url()} alt="" className="w-80 object-cover pb-10 lg:h-40 rounded-xl" />
                <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">{collection.title}</h1>
                {loading ? (
                    <p className="animate-pulse pt-2 text-green-500">Loading Supply Count</p>
                ) : (
                    <p className="pt-2 text-green-500">{claimedSupply} / {totalSupply?.toString()} NFT's claimed</p>
                )}
                {loading && (
                    <img className="h-80 w-80 object-contain" src="https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="" />
                )
                }
            </div>

            {/* Button */}
            <button onClick={mintNft} disabled={loading || claimedSupply === totalSupply?.toNumber() || !address} className="h-16 w-full bg-red-600 text-white rounded-full mt-10 font-bold disabled:bg-gray-400">
                {loading ? (
                    <>Loading...</>
                ) : (
                    claimedSupply === totalSupply?.toNumber() ? (
                        <>SOLD OUT</>
                    ) : !address ? (
                        <>Sign in to Mint</>
                    ) : (
                        <span className="font-bold">Mint NFT ({priceInEth} ETH)</span>
                    )
                )}
                </button>

            <hr className="my-2 border" />
            {address && <p className="text-center text-sm text-rose-400">You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>}
        </div>
    </div>
  )
}

export default NFTDropPage

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const query = 
    `
    *[_type == "collection" && slug.current == $id][0]{
        _id,
        title,
        address,
        description,
        nftCollectionName,
        mainImage {
        asset
        },
        previewImage {
          asset
        },
        slug{
          current
        },
        creator-> {
          _id,
          name,
          address,
          slug {
          current
          },
        },
            
      }
    `

    const collection = await sanityClient.fetch(query, {
        id: params?.id
    })

    if(!collection) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            collection
        }
    }
}