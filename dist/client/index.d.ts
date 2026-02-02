import * as Types from '../types';
export declare class EsiClient {
    private readonly baseUrl;
    private readonly userAgent;
    private readonly token?;
    private readonly useRequestHeaders;
    constructor(options: {
        userAgent: string;
        token?: string;
        useRequestHeaders?: boolean;
    });
    private request;
    /**
     * List all active player alliances
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetAlliances
     */
    getAlliances(): Promise<Types.EsiResponse<Types.GetAlliancesResponse, Types.GetAlliancesResponseHeaders>>;
    /**
     * Public information about an alliance
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetAlliancesAllianceId
     */
    getAlliance(params: Types.GetAllianceParams): Promise<Types.EsiResponse<Types.GetAllianceResponse, Types.GetAllianceResponseHeaders>>;
    /**
     * Return contacts of an alliance
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetAlliancesAllianceIdContacts
     */
    getAllianceContacts(params: Types.GetAllianceContactsParams): Promise<Types.EsiResponse<Types.GetAllianceContactsResponse, Types.GetAllianceContactsResponseHeaders>>;
    /**
     * Return custom labels for an alliance's contacts
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetAlliancesAllianceIdContactsLabels
     */
    getAllianceContactsLabels(params: Types.GetAllianceContactsLabelsParams): Promise<Types.EsiResponse<Types.GetAllianceContactsLabelsResponse, Types.GetAllianceContactsLabelsResponseHeaders>>;
    /**
     * List all current member corporations of an alliance
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetAlliancesAllianceIdCorporations
     */
    getAllianceCorporations(params: Types.GetAllianceCorporationsParams): Promise<Types.EsiResponse<Types.GetAllianceCorporationsResponse, Types.GetAllianceCorporationsResponseHeaders>>;
    /**
     * Get the icon urls for a alliance
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetAlliancesAllianceIdIcons
     */
    getAllianceIcons(params: Types.GetAllianceIconsParams): Promise<Types.EsiResponse<Types.GetAllianceIconsResponse, Types.GetAllianceIconsResponseHeaders>>;
    /**
     * Bulk lookup of character IDs to corporation, alliance and faction
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCharactersAffiliation
     */
    postCharactersAffiliation(params: Types.PostCharactersAffiliationParams): Promise<Types.EsiResponse<Types.PostCharactersAffiliationResponse, Types.PostCharactersAffiliationResponseHeaders>>;
    /**
     * Public information about a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterId
     */
    getCharacter(params: Types.GetCharacterParams): Promise<Types.EsiResponse<Types.GetCharacterResponse, Types.GetCharacterResponseHeaders>>;
    /**
     * Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdAgentsResearch
     */
    getCharacterAgentsResearch(params: Types.GetCharacterAgentsResearchParams): Promise<Types.EsiResponse<Types.GetCharacterAgentsResearchResponse, Types.GetCharacterAgentsResearchResponseHeaders>>;
    /**
     * Return a list of the characters assets
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdAssets
     */
    getCharacterAssets(params: Types.GetCharacterAssetsParams): Promise<Types.EsiResponse<Types.GetCharacterAssetsResponse, Types.GetCharacterAssetsResponseHeaders>>;
    /**
     * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCharactersCharacterIdAssetsLocations
     */
    postCharacterAssetsLocations(params: Types.PostCharacterAssetsLocationsParams): Promise<Types.EsiResponse<Types.PostCharacterAssetsLocationsResponse, Types.PostCharacterAssetsLocationsResponseHeaders>>;
    /**
     * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCharactersCharacterIdAssetsNames
     */
    postCharacterAssetsNames(params: Types.PostCharacterAssetsNamesParams): Promise<Types.EsiResponse<Types.PostCharacterAssetsNamesResponse, Types.PostCharacterAssetsNamesResponseHeaders>>;
    /**
     * Return attributes of a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdAttributes
     */
    getCharacterAttributes(params: Types.GetCharacterAttributesParams): Promise<Types.EsiResponse<Types.GetCharacterAttributesResponse, Types.GetCharacterAttributesResponseHeaders>>;
    /**
     * Return a list of blueprints the character owns
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdBlueprints
     */
    getCharacterBlueprints(params: Types.GetCharacterBlueprintsParams): Promise<Types.EsiResponse<Types.GetCharacterBlueprintsResponse, Types.GetCharacterBlueprintsResponseHeaders>>;
    /**
     * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdCalendar
     */
    getCharacterCalendar(params: Types.GetCharacterCalendarParams): Promise<Types.EsiResponse<Types.GetCharacterCalendarResponse, Types.GetCharacterCalendarResponseHeaders>>;
    /**
     * Get all the information for a specific event
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdCalendarEventId
     */
    getCharacterCalendarEventId(params: Types.GetCharacterCalendarEventIdParams): Promise<Types.EsiResponse<Types.GetCharacterCalendarEventIdResponse, Types.GetCharacterCalendarEventIdResponseHeaders>>;
    /**
     * Set your response status to an event
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PutCharactersCharacterIdCalendarEventId
     */
    putCharacterCalendarEventId(params: Types.PutCharacterCalendarEventIdParams): Promise<Types.EsiResponse<undefined, Types.PutCharacterCalendarEventIdResponseHeaders>>;
    /**
     * Get all invited attendees for a given event
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdCalendarEventIdAttendees
     */
    getCharacterCalendarEventAttendees(params: Types.GetCharacterCalendarEventAttendeesParams): Promise<Types.EsiResponse<Types.GetCharacterCalendarEventAttendeesResponse, Types.GetCharacterCalendarEventAttendeesResponseHeaders>>;
    /**
     * A list of the character's clones
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdClones
     */
    getCharacterClones(params: Types.GetCharacterClonesParams): Promise<Types.EsiResponse<Types.GetCharacterClonesResponse, Types.GetCharacterClonesResponseHeaders>>;
    /**
     * Bulk delete contacts
  
     * @see https://developers.eveonline.com/api-explorer#/operations/DeleteCharactersCharacterIdContacts
     */
    deleteCharacterContacts(params: Types.DeleteCharacterContactsParams): Promise<Types.EsiResponse<undefined, Types.DeleteCharacterContactsResponseHeaders>>;
    /**
     * Return contacts of a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdContacts
     */
    getCharacterContacts(params: Types.GetCharacterContactsParams): Promise<Types.EsiResponse<Types.GetCharacterContactsResponse, Types.GetCharacterContactsResponseHeaders>>;
    /**
     * Bulk add contacts with same settings
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCharactersCharacterIdContacts
     */
    postCharacterContacts(params: Types.PostCharacterContactsParams): Promise<Types.EsiResponse<Types.PostCharacterContactsResponse, Types.PostCharacterContactsResponseHeaders>>;
    /**
     * Bulk edit contacts with same settings
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PutCharactersCharacterIdContacts
     */
    putCharacterContacts(params: Types.PutCharacterContactsParams): Promise<Types.EsiResponse<undefined, Types.PutCharacterContactsResponseHeaders>>;
    /**
     * Return custom labels for a character's contacts
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdContactsLabels
     */
    getCharacterContactsLabels(params: Types.GetCharacterContactsLabelsParams): Promise<Types.EsiResponse<Types.GetCharacterContactsLabelsResponse, Types.GetCharacterContactsLabelsResponseHeaders>>;
    /**
     * Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdContracts
     */
    getCharacterContracts(params: Types.GetCharacterContractsParams): Promise<Types.EsiResponse<Types.GetCharacterContractsResponse, Types.GetCharacterContractsResponseHeaders>>;
    /**
     * Lists bids on a particular auction contract
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdContractsContractIdBids
     */
    getCharacterContractBids(params: Types.GetCharacterContractBidsParams): Promise<Types.EsiResponse<Types.GetCharacterContractBidsResponse, Types.GetCharacterContractBidsResponseHeaders>>;
    /**
     * Lists items of a particular contract
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdContractsContractIdItems
     */
    getCharacterContractItems(params: Types.GetCharacterContractItemsParams): Promise<Types.EsiResponse<Types.GetCharacterContractItemsResponse, Types.GetCharacterContractItemsResponseHeaders>>;
    /**
     * Get a list of all the corporations a character has been a member of
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdCorporationhistory
     */
    getCharacterCorporationhistory(params: Types.GetCharacterCorporationhistoryParams): Promise<Types.EsiResponse<Types.GetCharacterCorporationhistoryResponse, Types.GetCharacterCorporationhistoryResponseHeaders>>;
    /**
     * Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCharactersCharacterIdCspa
     */
    postCharacterCspa(params: Types.PostCharacterCspaParams): Promise<Types.EsiResponse<number, Types.PostCharacterCspaResponseHeaders>>;
    /**
     * Return a character's jump activation and fatigue information
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdFatigue
     */
    getCharacterFatigue(params: Types.GetCharacterFatigueParams): Promise<Types.EsiResponse<Types.GetCharacterFatigueResponse, Types.GetCharacterFatigueResponseHeaders>>;
    /**
     * Return fittings of a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdFittings
     */
    getCharacterFittings(params: Types.GetCharacterFittingsParams): Promise<Types.EsiResponse<Types.GetCharacterFittingsResponse, Types.GetCharacterFittingsResponseHeaders>>;
    /**
     * Save a new fitting for a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCharactersCharacterIdFittings
     */
    postCharacterFittings(params: Types.PostCharacterFittingsParams): Promise<Types.EsiResponse<Types.PostCharacterFittingsResponse, Types.PostCharacterFittingsResponseHeaders>>;
    /**
     * Delete a fitting from a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/DeleteCharactersCharacterIdFittingsFittingId
     */
    deleteCharacterFitting(params: Types.DeleteCharacterFittingParams): Promise<Types.EsiResponse<undefined, Types.DeleteCharacterFittingResponseHeaders>>;
    /**
     * Return the fleet ID the character is in, if any.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdFleet
     */
    getCharacterFleet(params: Types.GetCharacterFleetParams): Promise<Types.EsiResponse<Types.GetCharacterFleetResponse, Types.GetCharacterFleetResponseHeaders>>;
    /**
     * Statistical overview of a character involved in faction warfare
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdFwStats
     */
    getCharacterFwStats(params: Types.GetCharacterFwStatsParams): Promise<Types.EsiResponse<Types.GetCharacterFwStatsResponse, Types.GetCharacterFwStatsResponseHeaders>>;
    /**
     * Return implants on the active clone of a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdImplants
     */
    getCharacterImplants(params: Types.GetCharacterImplantsParams): Promise<Types.EsiResponse<Types.GetCharacterImplantsResponse, Types.GetCharacterImplantsResponseHeaders>>;
    /**
     * List industry jobs placed by a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdIndustryJobs
     */
    getCharacterIndustryJobs(params: Types.GetCharacterIndustryJobsParams): Promise<Types.EsiResponse<Types.GetCharacterIndustryJobsResponse, Types.GetCharacterIndustryJobsResponseHeaders>>;
    /**
     * Return a list of a character's kills and losses going back 90 days
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdKillmailsRecent
     */
    getCharacterKillmailsRecent(params: Types.GetCharacterKillmailsRecentParams): Promise<Types.EsiResponse<Types.GetCharacterKillmailsRecentResponse, Types.GetCharacterKillmailsRecentResponseHeaders>>;
    /**
     * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdLocation
     */
    getCharacterLocation(params: Types.GetCharacterLocationParams): Promise<Types.EsiResponse<Types.GetCharacterLocationResponse, Types.GetCharacterLocationResponseHeaders>>;
    /**
     * Return a list of loyalty points for all corporations the character has worked for
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdLoyaltyPoints
     */
    getCharacterLoyaltyPoints(params: Types.GetCharacterLoyaltyPointsParams): Promise<Types.EsiResponse<Types.GetCharacterLoyaltyPointsResponse, Types.GetCharacterLoyaltyPointsResponseHeaders>>;
    /**
     * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdMail
     */
    getCharacterMail(params: Types.GetCharacterMailParams): Promise<Types.EsiResponse<Types.GetCharacterMailResponse, Types.GetCharacterMailResponseHeaders>>;
    /**
     * Create and send a new mail
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCharactersCharacterIdMail
     */
    postCharacterMail(params: Types.PostCharacterMailParams): Promise<Types.EsiResponse<number, Types.PostCharacterMailResponseHeaders>>;
    /**
     * Return a list of the users mail labels, unread counts for each label and a total unread count.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdMailLabels
     */
    getCharacterMailLabels(params: Types.GetCharacterMailLabelsParams): Promise<Types.EsiResponse<Types.GetCharacterMailLabelsResponse, Types.GetCharacterMailLabelsResponseHeaders>>;
    /**
     * Create a mail label
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCharactersCharacterIdMailLabels
     */
    postCharacterMailLabels(params: Types.PostCharacterMailLabelsParams): Promise<Types.EsiResponse<number, Types.PostCharacterMailLabelsResponseHeaders>>;
    /**
     * Delete a mail label
  
     * @see https://developers.eveonline.com/api-explorer#/operations/DeleteCharactersCharacterIdMailLabelsLabelId
     */
    deleteCharacterMailLabel(params: Types.DeleteCharacterMailLabelParams): Promise<Types.EsiResponse<undefined, Types.DeleteCharacterMailLabelResponseHeaders>>;
    /**
     * Return all mailing lists that the character is subscribed to
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdMailLists
     */
    getCharacterMailLists(params: Types.GetCharacterMailListsParams): Promise<Types.EsiResponse<Types.GetCharacterMailListsResponse, Types.GetCharacterMailListsResponseHeaders>>;
    /**
     * Delete a mail
  
     * @see https://developers.eveonline.com/api-explorer#/operations/DeleteCharactersCharacterIdMailMailId
     */
    deleteCharacterMailMailId(params: Types.DeleteCharacterMailMailIdParams): Promise<Types.EsiResponse<undefined, Types.DeleteCharacterMailMailIdResponseHeaders>>;
    /**
     * Return the contents of an EVE mail
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdMailMailId
     */
    getCharacterMailMailId(params: Types.GetCharacterMailMailIdParams): Promise<Types.EsiResponse<Types.GetCharacterMailMailIdResponse, Types.GetCharacterMailMailIdResponseHeaders>>;
    /**
     * Update metadata about a mail
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PutCharactersCharacterIdMailMailId
     */
    putCharacterMailMailId(params: Types.PutCharacterMailMailIdParams): Promise<Types.EsiResponse<undefined, Types.PutCharacterMailMailIdResponseHeaders>>;
    /**
     * Return a list of medals the character has
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdMedals
     */
    getCharacterMedals(params: Types.GetCharacterMedalsParams): Promise<Types.EsiResponse<Types.GetCharacterMedalsResponse, Types.GetCharacterMedalsResponseHeaders>>;
    /**
     * Paginated record of all mining done by a character for the past 30 days
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdMining
     */
    getCharacterMining(params: Types.GetCharacterMiningParams): Promise<Types.EsiResponse<Types.GetCharacterMiningResponse, Types.GetCharacterMiningResponseHeaders>>;
    /**
     * Return character notifications
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdNotifications
     */
    getCharacterNotifications(params: Types.GetCharacterNotificationsParams): Promise<Types.EsiResponse<Types.GetCharacterNotificationsResponse, Types.GetCharacterNotificationsResponseHeaders>>;
    /**
     * Return notifications about having been added to someone's contact list
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdNotificationsContacts
     */
    getCharacterNotificationsContacts(params: Types.GetCharacterNotificationsContactsParams): Promise<Types.EsiResponse<Types.GetCharacterNotificationsContactsResponse, Types.GetCharacterNotificationsContactsResponseHeaders>>;
    /**
     * Checks if the character is currently online
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdOnline
     */
    getCharacterOnline(params: Types.GetCharacterOnlineParams): Promise<Types.EsiResponse<Types.GetCharacterOnlineResponse, Types.GetCharacterOnlineResponseHeaders>>;
    /**
     * List open market orders placed by a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdOrders
     */
    getCharacterOrders(params: Types.GetCharacterOrdersParams): Promise<Types.EsiResponse<Types.GetCharacterOrdersResponse, Types.GetCharacterOrdersResponseHeaders>>;
    /**
     * List cancelled and expired market orders placed by a character up to 90 days in the past.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdOrdersHistory
     */
    getCharacterOrdersHistory(params: Types.GetCharacterOrdersHistoryParams): Promise<Types.EsiResponse<Types.GetCharacterOrdersHistoryResponse, Types.GetCharacterOrdersHistoryResponseHeaders>>;
    /**
     * Returns a list of all planetary colonies owned by a character.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdPlanets
     */
    getCharacterPlanets(params: Types.GetCharacterPlanetsParams): Promise<Types.EsiResponse<Types.GetCharacterPlanetsResponse, Types.GetCharacterPlanetsResponseHeaders>>;
    /**
     * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdPlanetsPlanetId
     */
    getCharacterPlanet(params: Types.GetCharacterPlanetParams): Promise<Types.EsiResponse<Types.GetCharacterPlanetResponse, Types.GetCharacterPlanetResponseHeaders>>;
    /**
     * Get portrait urls for a character
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdPortrait
     */
    getCharacterPortrait(params: Types.GetCharacterPortraitParams): Promise<Types.EsiResponse<Types.GetCharacterPortraitResponse, Types.GetCharacterPortraitResponseHeaders>>;
    /**
     * Returns a character's corporation roles
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdRoles
     */
    getCharacterRoles(params: Types.GetCharacterRolesParams): Promise<Types.EsiResponse<Types.GetCharacterRolesResponse, Types.GetCharacterRolesResponseHeaders>>;
    /**
     * Search for entities that match a given sub-string.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdSearch
     */
    getCharacterSearch(params: Types.GetCharacterSearchParams): Promise<Types.EsiResponse<Types.GetCharacterSearchResponse, Types.GetCharacterSearchResponseHeaders>>;
    /**
     * Get the current ship type, name and id
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdShip
     */
    getCharacterShip(params: Types.GetCharacterShipParams): Promise<Types.EsiResponse<Types.GetCharacterShipResponse, Types.GetCharacterShipResponseHeaders>>;
    /**
     * List the configured skill queue for the given character.
  
     * Entries that have their finish time in the past are completed, but aren't updated in the "/skills" route
  yet. This will happen the next time the character logs in.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdSkillqueue
     */
    getCharacterSkillqueue(params: Types.GetCharacterSkillqueueParams): Promise<Types.EsiResponse<Types.GetCharacterSkillqueueResponse, Types.GetCharacterSkillqueueResponseHeaders>>;
    /**
     * List all trained skills for the given character.
  
     * Skills returned by this route can be out-of-date if the character hasn't logged in since one or more skills
  completed training. Use the /skillqueue route to check for skills that completed training. Entries that are
  in the past need to be applied on top of this list to get an accurate view of the character's current skills.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdSkills
     */
    getCharacterSkills(params: Types.GetCharacterSkillsParams): Promise<Types.EsiResponse<Types.GetCharacterSkillsResponse, Types.GetCharacterSkillsResponseHeaders>>;
    /**
     * Return character standings from agents, NPC corporations, and factions
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdStandings
     */
    getCharacterStandings(params: Types.GetCharacterStandingsParams): Promise<Types.EsiResponse<Types.GetCharacterStandingsResponse, Types.GetCharacterStandingsResponseHeaders>>;
    /**
     * Returns a character's titles
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdTitles
     */
    getCharacterTitles(params: Types.GetCharacterTitlesParams): Promise<Types.EsiResponse<Types.GetCharacterTitlesResponse, Types.GetCharacterTitlesResponseHeaders>>;
    /**
     * Returns a character's wallet balance
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdWallet
     */
    getCharacterWallet(params: Types.GetCharacterWalletParams): Promise<Types.EsiResponse<number, Types.GetCharacterWalletResponseHeaders>>;
    /**
     * Retrieve the given character's wallet journal going 30 days back
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdWalletJournal
     */
    getCharacterWalletJournal(params: Types.GetCharacterWalletJournalParams): Promise<Types.EsiResponse<Types.GetCharacterWalletJournalResponse, Types.GetCharacterWalletJournalResponseHeaders>>;
    /**
     * Get wallet transactions of a character
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCharactersCharacterIdWalletTransactions
     */
    getCharacterWalletTransactions(params: Types.GetCharacterWalletTransactionsParams): Promise<Types.EsiResponse<Types.GetCharacterWalletTransactionsResponse, Types.GetCharacterWalletTransactionsResponseHeaders>>;
    /**
     * Lists bids on a public auction contract
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetContractsPublicBidsContractId
     */
    getContractsPublicBids(params: Types.GetContractsPublicBidsParams): Promise<Types.EsiResponse<Types.GetContractsPublicBidsResponse, Types.GetContractsPublicBidsResponseHeaders>>;
    /**
     * Lists items of a public contract
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetContractsPublicItemsContractId
     */
    getContractsPublicItems(params: Types.GetContractsPublicItemsParams): Promise<Types.EsiResponse<Types.GetContractsPublicItemsResponse, Types.GetContractsPublicItemsResponseHeaders>>;
    /**
     * Returns a paginated list of all public contracts in the given region
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetContractsPublicRegionId
     */
    getContractsPublicRegionId(params: Types.GetContractsPublicRegionIdParams): Promise<Types.EsiResponse<Types.GetContractsPublicRegionIdResponse, Types.GetContractsPublicRegionIdResponseHeaders>>;
    /**
     * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationCorporationIdMiningExtractions
     */
    getCorporationCorporationMiningExtractions(params: Types.GetCorporationCorporationMiningExtractionsParams): Promise<Types.EsiResponse<Types.GetCorporationCorporationMiningExtractionsResponse, Types.GetCorporationCorporationMiningExtractionsResponseHeaders>>;
    /**
     * Paginated list of all entities capable of observing and recording mining for a corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationCorporationIdMiningObservers
     */
    getCorporationCorporationMiningObservers(params: Types.GetCorporationCorporationMiningObserversParams): Promise<Types.EsiResponse<Types.GetCorporationCorporationMiningObserversResponse, Types.GetCorporationCorporationMiningObserversResponseHeaders>>;
    /**
     * Paginated record of all mining seen by an observer
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationCorporationIdMiningObserversObserverId
     */
    getCorporationCorporationMiningObserver(params: Types.GetCorporationCorporationMiningObserverParams): Promise<Types.EsiResponse<Types.GetCorporationCorporationMiningObserverResponse, Types.GetCorporationCorporationMiningObserverResponseHeaders>>;
    /**
     * Get a list of npc corporations
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsNpccorps
     */
    getCorporationsNpccorps(): Promise<Types.EsiResponse<Types.GetCorporationsNpccorpsResponse, Types.GetCorporationsNpccorpsResponseHeaders>>;
    /**
     * Public information about a corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationId
     */
    getCorporation(params: Types.GetCorporationParams): Promise<Types.EsiResponse<Types.GetCorporationResponse, Types.GetCorporationResponseHeaders>>;
    /**
     * Get a list of all the alliances a corporation has been a member of
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdAlliancehistory
     */
    getCorporationAlliancehistory(params: Types.GetCorporationAlliancehistoryParams): Promise<Types.EsiResponse<Types.GetCorporationAlliancehistoryResponse, Types.GetCorporationAlliancehistoryResponseHeaders>>;
    /**
     * Return a list of the corporation assets
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdAssets
     */
    getCorporationAssets(params: Types.GetCorporationAssetsParams): Promise<Types.EsiResponse<Types.GetCorporationAssetsResponse, Types.GetCorporationAssetsResponseHeaders>>;
    /**
     * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCorporationsCorporationIdAssetsLocations
     */
    postCorporationAssetsLocations(params: Types.PostCorporationAssetsLocationsParams): Promise<Types.EsiResponse<Types.PostCorporationAssetsLocationsResponse, Types.PostCorporationAssetsLocationsResponseHeaders>>;
    /**
     * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostCorporationsCorporationIdAssetsNames
     */
    postCorporationAssetsNames(params: Types.PostCorporationAssetsNamesParams): Promise<Types.EsiResponse<Types.PostCorporationAssetsNamesResponse, Types.PostCorporationAssetsNamesResponseHeaders>>;
    /**
     * Returns a list of blueprints the corporation owns
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdBlueprints
     */
    getCorporationBlueprints(params: Types.GetCorporationBlueprintsParams): Promise<Types.EsiResponse<Types.GetCorporationBlueprintsResponse, Types.GetCorporationBlueprintsResponseHeaders>>;
    /**
     * Return contacts of a corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdContacts
     */
    getCorporationContacts(params: Types.GetCorporationContactsParams): Promise<Types.EsiResponse<Types.GetCorporationContactsResponse, Types.GetCorporationContactsResponseHeaders>>;
    /**
     * Return custom labels for a corporation's contacts
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdContactsLabels
     */
    getCorporationContactsLabels(params: Types.GetCorporationContactsLabelsParams): Promise<Types.EsiResponse<Types.GetCorporationContactsLabelsResponse, Types.GetCorporationContactsLabelsResponseHeaders>>;
    /**
     * Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdContainersLogs
     */
    getCorporationContainersLogs(params: Types.GetCorporationContainersLogsParams): Promise<Types.EsiResponse<Types.GetCorporationContainersLogsResponse, Types.GetCorporationContainersLogsResponseHeaders>>;
    /**
     * Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdContracts
     */
    getCorporationContracts(params: Types.GetCorporationContractsParams): Promise<Types.EsiResponse<Types.GetCorporationContractsResponse, Types.GetCorporationContractsResponseHeaders>>;
    /**
     * Lists bids on a particular auction contract
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdContractsContractIdBids
     */
    getCorporationContractBids(params: Types.GetCorporationContractBidsParams): Promise<Types.EsiResponse<Types.GetCorporationContractBidsResponse, Types.GetCorporationContractBidsResponseHeaders>>;
    /**
     * Lists items of a particular contract
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdContractsContractIdItems
     */
    getCorporationContractItems(params: Types.GetCorporationContractItemsParams): Promise<Types.EsiResponse<Types.GetCorporationContractItemsResponse, Types.GetCorporationContractItemsResponseHeaders>>;
    /**
     * List customs offices owned by a corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdCustomsOffices
     */
    getCorporationCustomsOffices(params: Types.GetCorporationCustomsOfficesParams): Promise<Types.EsiResponse<Types.GetCorporationCustomsOfficesResponse, Types.GetCorporationCustomsOfficesResponseHeaders>>;
    /**
     * Return corporation hangar and wallet division names, only show if a division is not using the default name
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdDivisions
     */
    getCorporationDivisions(params: Types.GetCorporationDivisionsParams): Promise<Types.EsiResponse<Types.GetCorporationDivisionsResponse, Types.GetCorporationDivisionsResponseHeaders>>;
    /**
     * Return a corporation's facilities
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdFacilities
     */
    getCorporationFacilities(params: Types.GetCorporationFacilitiesParams): Promise<Types.EsiResponse<Types.GetCorporationFacilitiesResponse, Types.GetCorporationFacilitiesResponseHeaders>>;
    /**
     * Statistics about a corporation involved in faction warfare
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdFwStats
     */
    getCorporationFwStats(params: Types.GetCorporationFwStatsParams): Promise<Types.EsiResponse<Types.GetCorporationFwStatsResponse, Types.GetCorporationFwStatsResponseHeaders>>;
    /**
     * Get the icon urls for a corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdIcons
     */
    getCorporationIcons(params: Types.GetCorporationIconsParams): Promise<Types.EsiResponse<Types.GetCorporationIconsResponse, Types.GetCorporationIconsResponseHeaders>>;
    /**
     * List industry jobs run by a corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdIndustryJobs
     */
    getCorporationIndustryJobs(params: Types.GetCorporationIndustryJobsParams): Promise<Types.EsiResponse<Types.GetCorporationIndustryJobsResponse, Types.GetCorporationIndustryJobsResponseHeaders>>;
    /**
     * Get a list of a corporation's kills and losses going back 90 days
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdKillmailsRecent
     */
    getCorporationKillmailsRecent(params: Types.GetCorporationKillmailsRecentParams): Promise<Types.EsiResponse<Types.GetCorporationKillmailsRecentResponse, Types.GetCorporationKillmailsRecentResponseHeaders>>;
    /**
     * Returns a corporation's medals
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdMedals
     */
    getCorporationMedals(params: Types.GetCorporationMedalsParams): Promise<Types.EsiResponse<Types.GetCorporationMedalsResponse, Types.GetCorporationMedalsResponseHeaders>>;
    /**
     * Returns medals issued by a corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdMedalsIssued
     */
    getCorporationMedalsIssued(params: Types.GetCorporationMedalsIssuedParams): Promise<Types.EsiResponse<Types.GetCorporationMedalsIssuedResponse, Types.GetCorporationMedalsIssuedResponseHeaders>>;
    /**
     * Return the current member list of a corporation, the token's character need to be a member of the corporation.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdMembers
     */
    getCorporationMembers(params: Types.GetCorporationMembersParams): Promise<Types.EsiResponse<Types.GetCorporationMembersResponse, Types.GetCorporationMembersResponseHeaders>>;
    /**
     * Return a corporation's member limit, not including CEO himself
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdMembersLimit
     */
    getCorporationMembersLimit(params: Types.GetCorporationMembersLimitParams): Promise<Types.EsiResponse<number, Types.GetCorporationMembersLimitResponseHeaders>>;
    /**
     * Returns a corporation's members' titles
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdMembersTitles
     */
    getCorporationMembersTitles(params: Types.GetCorporationMembersTitlesParams): Promise<Types.EsiResponse<Types.GetCorporationMembersTitlesResponse, Types.GetCorporationMembersTitlesResponseHeaders>>;
    /**
     * Returns additional information about a corporation's members which helps tracking their activities
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdMembertracking
     */
    getCorporationMembertracking(params: Types.GetCorporationMembertrackingParams): Promise<Types.EsiResponse<Types.GetCorporationMembertrackingResponse, Types.GetCorporationMembertrackingResponseHeaders>>;
    /**
     * List open market orders placed on behalf of a corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdOrders
     */
    getCorporationOrders(params: Types.GetCorporationOrdersParams): Promise<Types.EsiResponse<Types.GetCorporationOrdersResponse, Types.GetCorporationOrdersResponseHeaders>>;
    /**
     * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdOrdersHistory
     */
    getCorporationOrdersHistory(params: Types.GetCorporationOrdersHistoryParams): Promise<Types.EsiResponse<Types.GetCorporationOrdersHistoryResponse, Types.GetCorporationOrdersHistoryResponseHeaders>>;
    /**
     * Return the roles of all members if the character has the personnel manager role or any grantable role.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdRoles
     */
    getCorporationRoles(params: Types.GetCorporationRolesParams): Promise<Types.EsiResponse<Types.GetCorporationRolesResponse, Types.GetCorporationRolesResponseHeaders>>;
    /**
     * Return how roles have changed for a coporation's members, up to a month
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdRolesHistory
     */
    getCorporationRolesHistory(params: Types.GetCorporationRolesHistoryParams): Promise<Types.EsiResponse<Types.GetCorporationRolesHistoryResponse, Types.GetCorporationRolesHistoryResponseHeaders>>;
    /**
     * Return the current shareholders of a corporation.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdShareholders
     */
    getCorporationShareholders(params: Types.GetCorporationShareholdersParams): Promise<Types.EsiResponse<Types.GetCorporationShareholdersResponse, Types.GetCorporationShareholdersResponseHeaders>>;
    /**
     * Return corporation standings from agents, NPC corporations, and factions
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdStandings
     */
    getCorporationStandings(params: Types.GetCorporationStandingsParams): Promise<Types.EsiResponse<Types.GetCorporationStandingsResponse, Types.GetCorporationStandingsResponseHeaders>>;
    /**
     * Returns list of corporation starbases (POSes)
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdStarbases
     */
    getCorporationStarbases(params: Types.GetCorporationStarbasesParams): Promise<Types.EsiResponse<Types.GetCorporationStarbasesResponse, Types.GetCorporationStarbasesResponseHeaders>>;
    /**
     * Returns various settings and fuels of a starbase (POS)
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdStarbasesStarbaseId
     */
    getCorporationStarbase(params: Types.GetCorporationStarbaseParams): Promise<Types.EsiResponse<Types.GetCorporationStarbaseResponse, Types.GetCorporationStarbaseResponseHeaders>>;
    /**
     * Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdStructures
     */
    getCorporationStructures(params: Types.GetCorporationStructuresParams): Promise<Types.EsiResponse<Types.GetCorporationStructuresResponse, Types.GetCorporationStructuresResponseHeaders>>;
    /**
     * Returns a corporation's titles
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdTitles
     */
    getCorporationTitles(params: Types.GetCorporationTitlesParams): Promise<Types.EsiResponse<Types.GetCorporationTitlesResponse, Types.GetCorporationTitlesResponseHeaders>>;
    /**
     * Get a corporation's wallets
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdWallets
     */
    getCorporationWallets(params: Types.GetCorporationWalletsParams): Promise<Types.EsiResponse<Types.GetCorporationWalletsResponse, Types.GetCorporationWalletsResponseHeaders>>;
    /**
     * Retrieve the given corporation's wallet journal for the given division going 30 days back
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdWalletsDivisionJournal
     */
    getCorporationWalletsDivisionJournal(params: Types.GetCorporationWalletsDivisionJournalParams): Promise<Types.EsiResponse<Types.GetCorporationWalletsDivisionJournalResponse, Types.GetCorporationWalletsDivisionJournalResponseHeaders>>;
    /**
     * Get wallet transactions of a corporation
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetCorporationsCorporationIdWalletsDivisionTransactions
     */
    getCorporationWalletsDivisionTransactions(params: Types.GetCorporationWalletsDivisionTransactionsParams): Promise<Types.EsiResponse<Types.GetCorporationWalletsDivisionTransactionsResponse, Types.GetCorporationWalletsDivisionTransactionsResponseHeaders>>;
    /**
     * Get a list of dogma attribute ids
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetDogmaAttributes
     */
    getDogmaAttributes(): Promise<Types.EsiResponse<Types.GetDogmaAttributesResponse, Types.GetDogmaAttributesResponseHeaders>>;
    /**
     * Get information on a dogma attribute
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetDogmaAttributesAttributeId
     */
    getDogmaAttribute(params: Types.GetDogmaAttributeParams): Promise<Types.EsiResponse<Types.GetDogmaAttributeResponse, Types.GetDogmaAttributeResponseHeaders>>;
    /**
     * Returns info about a dynamic item resulting from mutation with a mutaplasmid.
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetDogmaDynamicItemsTypeIdItemId
     */
    getDogmaDynamicTypeItemId(params: Types.GetDogmaDynamicTypeItemIdParams): Promise<Types.EsiResponse<Types.GetDogmaDynamicTypeItemIdResponse, Types.GetDogmaDynamicTypeItemIdResponseHeaders>>;
    /**
     * Get a list of dogma effect ids
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetDogmaEffects
     */
    getDogmaEffects(): Promise<Types.EsiResponse<Types.GetDogmaEffectsResponse, Types.GetDogmaEffectsResponseHeaders>>;
    /**
     * Get information on a dogma effect
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetDogmaEffectsEffectId
     */
    getDogmaEffect(params: Types.GetDogmaEffectParams): Promise<Types.EsiResponse<Types.GetDogmaEffectResponse, Types.GetDogmaEffectResponseHeaders>>;
    /**
     * Return details about a fleet
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetFleetsFleetId
     */
    getFleet(params: Types.GetFleetParams): Promise<Types.EsiResponse<Types.GetFleetResponse, Types.GetFleetResponseHeaders>>;
    /**
     * Update settings about a fleet
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PutFleetsFleetId
     */
    putFleet(params: Types.PutFleetParams): Promise<Types.EsiResponse<undefined, Types.PutFleetResponseHeaders>>;
    /**
     * Return information about fleet members
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetFleetsFleetIdMembers
     */
    getFleetMembers(params: Types.GetFleetMembersParams): Promise<Types.EsiResponse<Types.GetFleetMembersResponse, Types.GetFleetMembersResponseHeaders>>;
    /**
     * Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostFleetsFleetIdMembers
     */
    postFleetMembers(params: Types.PostFleetMembersParams): Promise<Types.EsiResponse<undefined, Types.PostFleetMembersResponseHeaders>>;
    /**
     * Kick a fleet member
  
     * @see https://developers.eveonline.com/api-explorer#/operations/DeleteFleetsFleetIdMembersMemberId
     */
    deleteFleetMember(params: Types.DeleteFleetMemberParams): Promise<Types.EsiResponse<undefined, Types.DeleteFleetMemberResponseHeaders>>;
    /**
     * Move a fleet member around
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PutFleetsFleetIdMembersMemberId
     */
    putFleetMember(params: Types.PutFleetMemberParams): Promise<Types.EsiResponse<undefined, Types.PutFleetMemberResponseHeaders>>;
    /**
     * Delete a fleet squad, only empty squads can be deleted
  
     * @see https://developers.eveonline.com/api-explorer#/operations/DeleteFleetsFleetIdSquadsSquadId
     */
    deleteFleetSquad(params: Types.DeleteFleetSquadParams): Promise<Types.EsiResponse<undefined, Types.DeleteFleetSquadResponseHeaders>>;
    /**
     * Rename a fleet squad
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PutFleetsFleetIdSquadsSquadId
     */
    putFleetSquad(params: Types.PutFleetSquadParams): Promise<Types.EsiResponse<undefined, Types.PutFleetSquadResponseHeaders>>;
    /**
     * Return information about wings in a fleet
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetFleetsFleetIdWings
     */
    getFleetWings(params: Types.GetFleetWingsParams): Promise<Types.EsiResponse<Types.GetFleetWingsResponse, Types.GetFleetWingsResponseHeaders>>;
    /**
     * Create a new wing in a fleet
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostFleetsFleetIdWings
     */
    postFleetWings(params: Types.PostFleetWingsParams): Promise<Types.EsiResponse<Types.PostFleetWingsResponse, Types.PostFleetWingsResponseHeaders>>;
    /**
     * Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty
  
     * @see https://developers.eveonline.com/api-explorer#/operations/DeleteFleetsFleetIdWingsWingId
     */
    deleteFleetWing(params: Types.DeleteFleetWingParams): Promise<Types.EsiResponse<undefined, Types.DeleteFleetWingResponseHeaders>>;
    /**
     * Rename a fleet wing
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PutFleetsFleetIdWingsWingId
     */
    putFleetWing(params: Types.PutFleetWingParams): Promise<Types.EsiResponse<undefined, Types.PutFleetWingResponseHeaders>>;
    /**
     * Create a new squad in a fleet
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostFleetsFleetIdWingsWingIdSquads
     */
    postFleetWingSquads(params: Types.PostFleetWingSquadsParams): Promise<Types.EsiResponse<Types.PostFleetWingSquadsResponse, Types.PostFleetWingSquadsResponseHeaders>>;
    /**
     * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetFwLeaderboards
     */
    getFwLeaderboards(): Promise<Types.EsiResponse<Types.GetFwLeaderboardsResponse, Types.GetFwLeaderboardsResponseHeaders>>;
    /**
     * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetFwLeaderboardsCharacters
     */
    getFwLeaderboardsCharacters(): Promise<Types.EsiResponse<Types.GetFwLeaderboardsCharactersResponse, Types.GetFwLeaderboardsCharactersResponseHeaders>>;
    /**
     * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetFwLeaderboardsCorporations
     */
    getFwLeaderboardsCorporations(): Promise<Types.EsiResponse<Types.GetFwLeaderboardsCorporationsResponse, Types.GetFwLeaderboardsCorporationsResponseHeaders>>;
    /**
     * Statistical overviews of factions involved in faction warfare
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetFwStats
     */
    getFwStats(): Promise<Types.EsiResponse<Types.GetFwStatsResponse, Types.GetFwStatsResponseHeaders>>;
    /**
     * An overview of the current ownership of faction warfare solar systems
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetFwSystems
     */
    getFwSystems(): Promise<Types.EsiResponse<Types.GetFwSystemsResponse, Types.GetFwSystemsResponseHeaders>>;
    /**
     * Data about which NPC factions are at war
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetFwWars
     */
    getFwWars(): Promise<Types.EsiResponse<Types.GetFwWarsResponse, Types.GetFwWarsResponseHeaders>>;
    /**
     * Return a list of current incursions
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetIncursions
     */
    getIncursions(): Promise<Types.EsiResponse<Types.GetIncursionsResponse, Types.GetIncursionsResponseHeaders>>;
    /**
     * Return a list of industry facilities
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetIndustryFacilities
     */
    getIndustryFacilities(): Promise<Types.EsiResponse<Types.GetIndustryFacilitiesResponse, Types.GetIndustryFacilitiesResponseHeaders>>;
    /**
     * Return cost indices for solar systems
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetIndustrySystems
     */
    getIndustrySystems(): Promise<Types.EsiResponse<Types.GetIndustrySystemsResponse, Types.GetIndustrySystemsResponseHeaders>>;
    /**
     * Return available insurance levels for all ship types
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetInsurancePrices
     */
    getInsurancePrices(): Promise<Types.EsiResponse<Types.GetInsurancePricesResponse, Types.GetInsurancePricesResponseHeaders>>;
    /**
     * Return a single killmail from its ID and hash
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetKillmailsKillmailIdKillmailHash
     */
    getKillmailKillmailHash(params: Types.GetKillmailKillmailHashParams): Promise<Types.EsiResponse<Types.GetKillmailKillmailHashResponse, Types.GetKillmailKillmailHashResponseHeaders>>;
    /**
     * Return a list of offers from a specific corporation's loyalty store
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetLoyaltyStoresCorporationIdOffers
     */
    getLoyaltyCorporationOffers(params: Types.GetLoyaltyCorporationOffersParams): Promise<Types.EsiResponse<Types.GetLoyaltyCorporationOffersResponse, Types.GetLoyaltyCorporationOffersResponseHeaders>>;
    /**
     * Get a list of item groups
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetMarketsGroups
     */
    getMarketsGroups(): Promise<Types.EsiResponse<Types.GetMarketsGroupsResponse, Types.GetMarketsGroupsResponseHeaders>>;
    /**
     * Get information on an item group
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetMarketsGroupsMarketGroupId
     */
    getMarketsGroupsMarketGroupId(params: Types.GetMarketsGroupsMarketGroupIdParams): Promise<Types.EsiResponse<Types.GetMarketsGroupsMarketGroupIdResponse, Types.GetMarketsGroupsMarketGroupIdResponseHeaders>>;
    /**
     * Return a list of prices
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetMarketsPrices
     */
    getMarketsPrices(): Promise<Types.EsiResponse<Types.GetMarketsPricesResponse, Types.GetMarketsPricesResponseHeaders>>;
    /**
     * Return all orders in a structure
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetMarketsStructuresStructureId
     */
    getMarketsStructure(params: Types.GetMarketsStructureParams): Promise<Types.EsiResponse<Types.GetMarketsStructureResponse, Types.GetMarketsStructureResponseHeaders>>;
    /**
     * Return a list of historical market statistics for the specified type in a region
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetMarketsRegionIdHistory
     */
    getRegionHistory(params: Types.GetRegionHistoryParams): Promise<Types.EsiResponse<Types.GetRegionHistoryResponse, Types.GetRegionHistoryResponseHeaders>>;
    /**
     * Return a list of orders in a region
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetMarketsRegionIdOrders
     */
    getRegionOrders(params: Types.GetRegionOrdersParams): Promise<Types.EsiResponse<Types.GetRegionOrdersResponse, Types.GetRegionOrdersResponseHeaders>>;
    /**
     * Return a list of type IDs that have active orders in the region, for efficient market indexing.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetMarketsRegionIdTypes
     */
    getRegionTypes(params: Types.GetRegionTypesParams): Promise<Types.EsiResponse<Types.GetRegionTypesResponse, Types.GetRegionTypesResponseHeaders>>;
    /**
     * Get the changelog of this API.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetMetaChangelog
     */
    getMetaChangelog(): Promise<Types.EsiResponse<Types.GetMetaChangelogResponse, Types.GetMetaChangelogResponseHeaders>>;
    /**
     * Get a list of compatibility dates.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetMetaCompatibilityDates
     */
    getMetaCompatibilityDates(): Promise<Types.EsiResponse<Types.GetMetaCompatibilityDatesResponse, Types.GetMetaCompatibilityDatesResponseHeaders>>;
    /**
     * Get the systems between origin and destination
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetRouteOriginDestination
     */
    getRouteOriginDestination(params: Types.GetRouteOriginDestinationParams): Promise<Types.EsiResponse<Types.GetRouteOriginDestinationResponse, Types.GetRouteOriginDestinationResponseHeaders>>;
    /**
     * Shows sovereignty data for campaigns.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetSovereigntyCampaigns
     */
    getSovereigntyCampaigns(): Promise<Types.EsiResponse<Types.GetSovereigntyCampaignsResponse, Types.GetSovereigntyCampaignsResponseHeaders>>;
    /**
     * Shows sovereignty information for solar systems
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetSovereigntyMap
     */
    getSovereigntyMap(): Promise<Types.EsiResponse<Types.GetSovereigntyMapResponse, Types.GetSovereigntyMapResponseHeaders>>;
    /**
     * Shows sovereignty data for structures.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetSovereigntyStructures
     */
    getSovereigntyStructures(): Promise<Types.EsiResponse<Types.GetSovereigntyStructuresResponse, Types.GetSovereigntyStructuresResponseHeaders>>;
    /**
     * EVE Server status
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetStatus
     */
    getStatus(): Promise<Types.EsiResponse<Types.GetStatusResponse, Types.GetStatusResponseHeaders>>;
    /**
     * Set a solar system as autopilot waypoint
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostUiAutopilotWaypoint
     */
    postUiAutopilotWaypoint(params?: Types.PostUiAutopilotWaypointParams): Promise<Types.EsiResponse<undefined, Types.PostUiAutopilotWaypointResponseHeaders>>;
    /**
     * Open the contract window inside the client
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostUiOpenwindowContract
     */
    postUiOpenwindowContract(params?: Types.PostUiOpenwindowContractParams): Promise<Types.EsiResponse<undefined, Types.PostUiOpenwindowContractResponseHeaders>>;
    /**
     * Open the information window for a character, corporation or alliance inside the client
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostUiOpenwindowInformation
     */
    postUiOpenwindowInformation(params?: Types.PostUiOpenwindowInformationParams): Promise<Types.EsiResponse<undefined, Types.PostUiOpenwindowInformationResponseHeaders>>;
    /**
     * Open the market details window for a specific typeID inside the client
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostUiOpenwindowMarketdetails
     */
    postUiOpenwindowMarketdetails(params?: Types.PostUiOpenwindowMarketdetailsParams): Promise<Types.EsiResponse<undefined, Types.PostUiOpenwindowMarketdetailsResponseHeaders>>;
    /**
     * Open the New Mail window, according to settings from the request if applicable
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostUiOpenwindowNewmail
     */
    postUiOpenwindowNewmail(params: Types.PostUiOpenwindowNewmailParams): Promise<Types.EsiResponse<undefined, Types.PostUiOpenwindowNewmailResponseHeaders>>;
    /**
     * Get all character ancestries
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseAncestries
     */
    getUniverseAncestries(): Promise<Types.EsiResponse<Types.GetUniverseAncestriesResponse, Types.GetUniverseAncestriesResponseHeaders>>;
    /**
     * Get information on an asteroid belt
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseAsteroidBeltsAsteroidBeltId
     */
    getUniverseAsteroidBeltsAsteroidBeltId(params: Types.GetUniverseAsteroidBeltsAsteroidBeltIdParams): Promise<Types.EsiResponse<Types.GetUniverseAsteroidBeltsAsteroidBeltIdResponse, Types.GetUniverseAsteroidBeltsAsteroidBeltIdResponseHeaders>>;
    /**
     * Get a list of bloodlines
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseBloodlines
     */
    getUniverseBloodlines(): Promise<Types.EsiResponse<Types.GetUniverseBloodlinesResponse, Types.GetUniverseBloodlinesResponseHeaders>>;
    /**
     * Get a list of item categories
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseCategories
     */
    getUniverseCategories(): Promise<Types.EsiResponse<Types.GetUniverseCategoriesResponse, Types.GetUniverseCategoriesResponseHeaders>>;
    /**
     * Get information of an item category
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseCategoriesCategoryId
     */
    getUniverseCategory(params: Types.GetUniverseCategoryParams): Promise<Types.EsiResponse<Types.GetUniverseCategoryResponse, Types.GetUniverseCategoryResponseHeaders>>;
    /**
     * Get a list of constellations
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseConstellations
     */
    getUniverseConstellations(): Promise<Types.EsiResponse<Types.GetUniverseConstellationsResponse, Types.GetUniverseConstellationsResponseHeaders>>;
    /**
     * Get information on a constellation
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseConstellationsConstellationId
     */
    getUniverseConstellation(params: Types.GetUniverseConstellationParams): Promise<Types.EsiResponse<Types.GetUniverseConstellationResponse, Types.GetUniverseConstellationResponseHeaders>>;
    /**
     * Get a list of factions
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseFactions
     */
    getUniverseFactions(): Promise<Types.EsiResponse<Types.GetUniverseFactionsResponse, Types.GetUniverseFactionsResponseHeaders>>;
    /**
     * Get a list of graphics
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseGraphics
     */
    getUniverseGraphics(): Promise<Types.EsiResponse<Types.GetUniverseGraphicsResponse, Types.GetUniverseGraphicsResponseHeaders>>;
    /**
     * Get information on a graphic
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseGraphicsGraphicId
     */
    getUniverseGraphic(params: Types.GetUniverseGraphicParams): Promise<Types.EsiResponse<Types.GetUniverseGraphicResponse, Types.GetUniverseGraphicResponseHeaders>>;
    /**
     * Get a list of item groups
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseGroups
     */
    getUniverseGroups(params?: Types.GetUniverseGroupsParams): Promise<Types.EsiResponse<Types.GetUniverseGroupsResponse, Types.GetUniverseGroupsResponseHeaders>>;
    /**
     * Get information on an item group
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseGroupsGroupId
     */
    getUniverseGroup(params: Types.GetUniverseGroupParams): Promise<Types.EsiResponse<Types.GetUniverseGroupResponse, Types.GetUniverseGroupResponseHeaders>>;
    /**
     * Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostUniverseIds
     */
    postUniverseIds(params: Types.PostUniverseIdsParams): Promise<Types.EsiResponse<Types.PostUniverseIdsResponse, Types.PostUniverseIdsResponseHeaders>>;
    /**
     * Get information on a moon
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseMoonsMoonId
     */
    getUniverseMoon(params: Types.GetUniverseMoonParams): Promise<Types.EsiResponse<Types.GetUniverseMoonResponse, Types.GetUniverseMoonResponseHeaders>>;
    /**
     * Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions
  
     * @see https://developers.eveonline.com/api-explorer#/operations/PostUniverseNames
     */
    postUniverseNames(params: Types.PostUniverseNamesParams): Promise<Types.EsiResponse<Types.PostUniverseNamesResponse, Types.PostUniverseNamesResponseHeaders>>;
    /**
     * Get information on a planet
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniversePlanetsPlanetId
     */
    getUniversePlanet(params: Types.GetUniversePlanetParams): Promise<Types.EsiResponse<Types.GetUniversePlanetResponse, Types.GetUniversePlanetResponseHeaders>>;
    /**
     * Get a list of character races
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseRaces
     */
    getUniverseRaces(): Promise<Types.EsiResponse<Types.GetUniverseRacesResponse, Types.GetUniverseRacesResponseHeaders>>;
    /**
     * Get a list of regions
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseRegions
     */
    getUniverseRegions(): Promise<Types.EsiResponse<Types.GetUniverseRegionsResponse, Types.GetUniverseRegionsResponseHeaders>>;
    /**
     * Get information on a region
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseRegionsRegionId
     */
    getUniverseRegion(params: Types.GetUniverseRegionParams): Promise<Types.EsiResponse<Types.GetUniverseRegionResponse, Types.GetUniverseRegionResponseHeaders>>;
    /**
     * Get information on a planetary factory schematic
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseSchematicsSchematicId
     */
    getUniverseSchematic(params: Types.GetUniverseSchematicParams): Promise<Types.EsiResponse<Types.GetUniverseSchematicResponse, Types.GetUniverseSchematicResponseHeaders>>;
    /**
     * Get information on a stargate
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseStargatesStargateId
     */
    getUniverseStargate(params: Types.GetUniverseStargateParams): Promise<Types.EsiResponse<Types.GetUniverseStargateResponse, Types.GetUniverseStargateResponseHeaders>>;
    /**
     * Get information on a star
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseStarsStarId
     */
    getUniverseStar(params: Types.GetUniverseStarParams): Promise<Types.EsiResponse<Types.GetUniverseStarResponse, Types.GetUniverseStarResponseHeaders>>;
    /**
     * Get information on a station
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseStationsStationId
     */
    getUniverseStation(params: Types.GetUniverseStationParams): Promise<Types.EsiResponse<Types.GetUniverseStationResponse, Types.GetUniverseStationResponseHeaders>>;
    /**
     * List all public structures
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseStructures
     */
    getUniverseStructures(params?: Types.GetUniverseStructuresParams): Promise<Types.EsiResponse<Types.GetUniverseStructuresResponse, Types.GetUniverseStructuresResponseHeaders>>;
    /**
     * Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseStructuresStructureId
     */
    getUniverseStructure(params: Types.GetUniverseStructureParams): Promise<Types.EsiResponse<Types.GetUniverseStructureResponse, Types.GetUniverseStructureResponseHeaders>>;
    /**
     * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseSystemJumps
     */
    getUniverseSystemJumps(): Promise<Types.EsiResponse<Types.GetUniverseSystemJumpsResponse, Types.GetUniverseSystemJumpsResponseHeaders>>;
    /**
     * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseSystemKills
     */
    getUniverseSystemKills(): Promise<Types.EsiResponse<Types.GetUniverseSystemKillsResponse, Types.GetUniverseSystemKillsResponseHeaders>>;
    /**
     * Get a list of solar systems
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseSystems
     */
    getUniverseSystems(): Promise<Types.EsiResponse<Types.GetUniverseSystemsResponse, Types.GetUniverseSystemsResponseHeaders>>;
    /**
     * Get information on a solar system.
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseSystemsSystemId
     */
    getUniverseSystem(params: Types.GetUniverseSystemParams): Promise<Types.EsiResponse<Types.GetUniverseSystemResponse, Types.GetUniverseSystemResponseHeaders>>;
    /**
     * Get a list of type ids
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseTypes
     */
    getUniverseTypes(params?: Types.GetUniverseTypesParams): Promise<Types.EsiResponse<Types.GetUniverseTypesResponse, Types.GetUniverseTypesResponseHeaders>>;
    /**
     * Get information on a type
  
     * This route expires daily at 11:05
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetUniverseTypesTypeId
     */
    getUniverseType(params: Types.GetUniverseTypeParams): Promise<Types.EsiResponse<Types.GetUniverseTypeResponse, Types.GetUniverseTypeResponseHeaders>>;
    /**
     * Return a list of wars
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetWars
     */
    getWars(params?: Types.GetWarsParams): Promise<Types.EsiResponse<Types.GetWarsResponse, Types.GetWarsResponseHeaders>>;
    /**
     * Return details about a war
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetWarsWarId
     */
    getWar(params: Types.GetWarParams): Promise<Types.EsiResponse<Types.GetWarResponse, Types.GetWarResponseHeaders>>;
    /**
     * Return a list of kills related to a war
  
     * @see https://developers.eveonline.com/api-explorer#/operations/GetWarsWarIdKillmails
     */
    getWarKillmails(params: Types.GetWarKillmailsParams): Promise<Types.EsiResponse<Types.GetWarKillmailsResponse, Types.GetWarKillmailsResponseHeaders>>;
}
export default EsiClient;
