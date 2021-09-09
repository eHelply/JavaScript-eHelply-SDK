import {createReviewRequest, updateReviewRequest } from  "./reviewTypes"
export default class ReviewSdk {
  axiosClient: any
  constructor(axiosClient: any) {
    this.axiosClient = axiosClient
  }
  create(payload: createReviewRequest, type: string, entity: string ): void {
    this.axiosClient.post(`/products/reviews/types/${type}/entities/${entity}`, payload).then((res: any) => {
      console.log(res.data)
    })
  }
  update(payload: updateReviewRequest, reviewUuid: string, type: string, entity: string ): void{
    this.axiosClient.put(`/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`, payload).then((res: any) => {
      console.log(res.data)
    })
  }
  get(reviewUuid: string, type: string, entity: string ){
    this.axiosClient.get(`/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`).then((res: any) => {
      console.log(res.data)
    })

  }
  delete(reviewUuid: string, type: string, entity: string){
    this.axiosClient.delete(`/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`).then((res: any) => {
      console.log(res.data)
    })

  }
}
