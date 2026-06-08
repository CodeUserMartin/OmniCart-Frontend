import { Lock } from 'lucide-react';

const QACards = ({icon, title, description}) => {
    return (
        <>           
                {/* Card */}
                <div className="border rounded-lg p-5 flex flex-col items-center gap-3 text-center">

                    {/* Icon */}
                    <div>
                          {icon}
                    </div>
                    {/* Title */}
                    <div>
                        <h3 className="font-bold text-lg text-(--accent-color)"> {title} </h3>
                    </div>

                    {/* Description */}
                    <div>
                        <p>
                            {description}
                        </p>
                    </div>

                </div>
        </>
    )
}


export default QACards

