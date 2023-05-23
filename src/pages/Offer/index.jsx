import Header from "../../components/Header"
import Modal from "../../components/Modal"
import SlideShow from "../../components/SlideShow"
import Button from "../../components/Button"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Tag from "../../components/Tag"
import "./index.css"

const Offer = () => {
    const { id } = useParams()
    const [offer, setOffer] = useState({})
    const navigate = useNavigate()
    const [nextOfferId, setNextOfferId] = useState("")
    const [previousOfferId, setPreviousOfferId] = useState("")




    useEffect(() => {
        const fetchOfferById = async () => {
            try {
                const response = await fetch(`/data/data.json`);
                const json = await response.json();
                const foundOffer = json.find((item) => item.id === id);
                setOffer(foundOffer);

                const findNextOfferId = (json) => {
                    const currentIndex = json.findIndex((item) => item.id === id);
                    if (currentIndex !== -1 && currentIndex + 1 < json.length) {
                        return json[currentIndex + 1].id;
                    }
                    return "";
                };
                const nextId = findNextOfferId(json);
                setNextOfferId(nextId);

                const findPreviousOfferId = (json) => {
                    const currentIndex = json.findIndex((item) => item.id === id)
                    if (currentIndex !== 0) {
                        return json[currentIndex - 1].id
                    }
                    return ""
                }
                const previousId = findPreviousOfferId(json);
                setPreviousOfferId(previousId);
            } catch (error) {
                console.log(error);
            }
        };

        fetchOfferById();
    }, [id]);



    if (!offer) {
        navigate("/error")
    }

    const ratings = []

    for (let i = 0; i < 5; i++) {
        let urlImg = ""
        if (i < offer.rating) {
            urlImg = "ratingFull"
        } else {
            urlImg = "ratingEmpty"
        }
        ratings.push(<div className="rating" key={i} style={{ backgroundImage: `url("/img/${urlImg}.svg")` }} />)
    }





    return (
        <>
            <Header />
            <SlideShow pictures={offer.pictures} />
            <div className="offer-header">
                <div className="title">
                    <h2>{offer.title}</h2>
                    <h4>{offer.location}</h4>
                    <div className="tags">
                        {offer.tags?.map((tag) => (
                            <Tag key={tag} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className="host-ratings">
                    <div className="host">
                        <h4>{offer.host?.name}<br /></h4>
                        <div className="hostPic" style={{ backgroundImage: `url(${offer.host?.picture})` }}>
                        </div>
                    </div>
                    <div className="ratings">
                        {ratings.map((rating) => {
                            return rating
                        })}
                    </div>
                </div>

            </div>
            <div className="modals">
                <Modal isOpen={false} title="Description" content={offer.description} />
                <Modal
                    isOpen={false}
                    title="Equipements"
                    content={offer.equipments?.map((equipment) => (
                        <span key={equipment}>{equipment}</span>
                    ))}
                />
            </div>
            <div className="offerBtnContainer">
                {previousOfferId && (
                    <Button onClick={() => {
                         navigate(`/offer/${previousOfferId}`);
                        window.scrollTo(0, 0);
                    }} value="Offre précédente" />
                )}
                {nextOfferId && (
                    <Button onClick={() => {
                        navigate(`/offer/${nextOfferId}`);
                        window.scrollTo(0, 0);
                    }} value="Offre suivante" />
                )}
            </div>

        </>
    )
}

export default Offer